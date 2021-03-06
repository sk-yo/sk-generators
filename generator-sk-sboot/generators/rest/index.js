var Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const _ = require('lodash');
const dotCase = require('dot-case');
const Entities = require('sk-node-api');
const chalk = require('chalk');
const fs = require('fs');
/*
 * Gerador de repository de projeto springboot.
 */
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.option('classname', { type: String, required: false });
    }

    initializing() {
        if(!fs.existsSync(`${this.destinationRoot()}/pom.xml`)) {
                this.log(chalk.red('O diretório atual não possui um arquivo pom.xml'));
                process.exit(1);
        }
        if(this.options.classname) {
            this.domainClass = Entities.findByName(this.options.classname);
            return;
        }
        this.domainClassesNames = Entities.getNames();
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
               this.domainClass =  Entities.findByName(answers.domainClass);
            }
        });
    }

    writing() {
        this.composeWith(require.resolve('../service'), {
            classname: this.domainClass.name
        });
        //let domainClassId = sk.findAttributeWithAnnotationName(this.domainClass.attributes, 'javax.persistence.Id');

        this.fs.copyTpl(this.templatePath('Rest.java.ejs'),
            this.destinationPath(`src/main/java/${this.domainClass.parentPackageDir}/rest/${this.domainClass.name}Rest.java`),
            { domainClass: this.domainClass, _: _ });
        //this.log(domainClass);

    }
}