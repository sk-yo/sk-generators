var Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const _ = require('lodash');
const dotCase = require('dot-case');
const sk = require('sk-node-api');
const chalk = require('chalk');
/*
 * Gerador de repository de projeto springboot.
 */
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.option('classname', { type: String, required: false });
    }

    initializing() {
        if(this.options.classname) {
            this.domainClass = sk.findClassByName(this.options.classname);
            return;
        }
        this.domainClassesNames = sk.findClassesNamesByAnnotationName('javax.persistence.Entity');
        if (this.domainClassesNames.length == 0) {
            this.log(chalk.red('Não há entidades de domínio no projeto java.'));
            process.exit(1);
        }
    }

    prompting() {
        var questions = [
            {
                type: 'list',
                name: 'domainClass',
                message: 'Selecione a entidade',
                choices: this.domainClassesNames,
                when: () => { return this.domainClass == undefined; }
                
            }
        ];

        return this.prompt(questions).then((answers) => {
            if(answers.domainClass) {
                this.domainClass =  sk.findClassByName(answers.domainClass);
            }
        });
    }

    writing() {
        this.composeWith(require.resolve('../service'), {
            classname: this.options.classname
        });
        let domainClassId = sk.findAttributeWithAnnotationName(this.domainClass.attributes, 'javax.persistence.Id');

        this.fs.copyTpl(this.templatePath('Rest.java'),
            this.destinationPath(`src/main/java/${this.domainClass.classPackage.classParentPackageDirectory}/rest/${this.domainClass.name}Rest.java`),
            { domainClass: this.domainClass, _: _ });
        //this.log(domainClass);

    }
}