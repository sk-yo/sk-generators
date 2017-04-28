var inquirer = require('inquirer');

module.exports = class Angular2CreateProjectClass {
    constructor(options) {
        super(options);
    }

    /**
    * Mostra as questions.
    */
    promptQuestions() {
        return inquirer.prompt(this.questions).then((answers) => {

        });
    }
}