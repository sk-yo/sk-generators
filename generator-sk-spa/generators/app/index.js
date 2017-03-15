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
        _generateSKsbootApp();
        _generateSKangular2App();
    }

    _generateSKsbootApp() {

    }

    _generateSKangular2App() {

    }
}