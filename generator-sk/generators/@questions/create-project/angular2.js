var inquirer = require('inquirer');
const Question = require('../../@questions/question');

module.exports = class Angular2CreateProjectClass extends Question {
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