const Question = require('../../@questions/question');

module.exports = class SpaCreateProjectClass extends Question {
    constructor(gen, options) {
        super(gen, options);
        this.questions.push({
            type: 'input',
            name: 'projectName',
            message: 'Digite o nome do projeto:'
        });
    }

    /**
    * Mostra as questions.
    */
    promptQuestions() {
        return this.prompt();
    }
}