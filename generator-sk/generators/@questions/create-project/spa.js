var inquirer = require('inquirer');
const Question = require('../../@questions/question');

module.exports = class SpaCreateProjectClass extends Question {
    constructor(gen, options) {
        super(gen, options);
    }

    /**
    * Mostra as questions.
    */
    promptQuestions() {
        return this.prompt();
    }
}