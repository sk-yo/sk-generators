var Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const _ = require('lodash');
const dotCase = require('dot-case');
const chalk = require('chalk');
const fs = require('fs');
const MainQuestionClass = require('../@questions/main');
/*
 * Gerador artefatos SK.
 */
module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
        let options = {
            destinationPath: this.destinationPath()
        }
        this.mainQuestion = new MainQuestionClass(options);
    }

    prompting() {
        return this.mainQuestion.promptQuestions();
    }

}