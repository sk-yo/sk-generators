var Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const _ = require('lodash');
const dotCase = require('dot-case');
const chalk = require('chalk');
const fs = require('fs');
/*
 * Gerador de repository de projeto springboot.
 */
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument('appname', { type: String, desc: 'Nome da aplicação.' });
    }

    writing() {

        this.appRootName = `${this.options.appname}-app`;
        //this.appRootPath = this.destinationRoot(this.destinationPath(this.appRootName));

        mkdirp(this.appRootName);
        this.destinationRoot(this.destinationPath(this.appRootName));

        this._generateSKsbootApp();
        this._generateSKangular2App();
    }

    _generateSKsbootApp() {
        this.composeWith(require.resolve('generator-sk-sboot/generators/app'), {
            arguments: [
                `${this.options.appname}-api`
            ]
        });
    }

    _generateSKangular2App() {
        this.composeWith(require.resolve('generator-sk-angular2/generators/app'), {
            arguments: [
                `${this.options.appname}`
            ]
        });
    }
}