var inquirer = require('inquirer');
var Question = require('../../@questions/question');

module.exports = class SpringBootCreateProjectClass extends Question {
    constructor(options) {
        super(options);
        this.questions.push({
            type: "checkbox",
            name: "sbootCreateProjectChoiceItem",
            message: "Selecione as opções do projeto?",
            choices: [
                "JPA",
                "Keycloak"
            ]
        });
    }

    /**
     * Mostra as questions.
     */
    promptQuestions() {
        return this.prompt();
    }

}