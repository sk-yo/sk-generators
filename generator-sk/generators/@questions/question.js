const path = require('path');
const fs = require('fs');
var inquirer = require('inquirer');

module.exports = class Question {
    constructor(options) {
        this.options = options;
        this.questions = [];
        this.dirname = path.basename(this.options.destinationPath);
        this.appName = this.dirname.substr(0, this.dirname.indexOf('-app'));
    }

    /**
     * Verifica se a aplicação é Angular 2.
     */
    isAngularApp() {
        return this.dirname.endsWith('-angular2') && fs.existsSync(`${this.dirname}/package.json`);
    }

    /**
     * Verifica se a aplicação é SpringBoot
     */
    isSbootApp() {
        return this.dirname.endsWith('-sboot') && fs.existsSync(`${this.dirname}/pom.xml`);
    }

    /**
     * Verifica se a aplicação é SPA (SpringBoot + Angular 2)
     */
    isSpaApp() {
        return this.dirname.endsWith('-app') && fs.existsSync(`${this.appName}-sboot/pom.xml`) && fs.existsSync(`${this.appName}-angular2/pom.xml`);
    }

    prompt() {
        return inquirer.prompt(this.questions);
    }
}