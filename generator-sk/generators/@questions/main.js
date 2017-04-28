const CreateProjectClass = require('../@questions/create-project/index');
const Question = require('../@questions/question');
/**
 * Classe principal de Question.
 */
module.exports = class MainQuestionClass extends Question {

    /**
     * 
     * @param {*} destinationPath 
     */
    constructor(gen, options) {
        super(gen, options);

        this.questions.push({
            type: "list",
            name: "mainChoiceItem",
            message: "O que você deseja fazer?",
            choices: [
                "Gerar artefato",
                "Rodar aplicação",
                "Realizar deploy da aplicação"
            ]
        });

    }


    /**
     * Mostra as questions.
     */
    promptQuestions() {
        if (this.isNoApp()) {
            let createProject = new CreateProjectClass(this.gen, this.options);
            return createProject.promptQuestions();
        }
        return this.prompt();
    }

}