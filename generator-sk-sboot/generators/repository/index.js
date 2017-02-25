var Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const _ = require('lodash');
const dotCase = require('dot-case');
const sk = require('sk-node-api');
const chalk = require('chalk');
/*
 * Gerador de scaffolding de projeto springboot.
 */
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {
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
                choices: this.domainClassesNames
            }
        ];

        return this.prompt(questions).then((answers) => {
            this.answers = answers;
        });
    }

    writing() {
        //this.log(sk.findClassesNamesByAnnotationName('javax.persistence.Entity'));
        //this.log(this.answers);
        this.log('\tcreate src');
    }
}