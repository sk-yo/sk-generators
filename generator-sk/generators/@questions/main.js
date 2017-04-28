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
    constructor(options) {
        super(options);
        /*
        this.questions.push({
            type: "list",
            name: "mainChoiceItem",
            message: "O que você deseja fazer?",
            choices: [
                "Criar novo projeto",
                "Gerar artefato",
                "Rodar aplicação",
                "Realizar deploy da aplicação"
            ]
        });
        */
    }


    /**
     * Mostra as questions.
     */
    promptQuestions() {
        if (this.isNoApp()) {
            let createProject = new CreateProjectClass(this.options);
            return createProject.promptQuestions();
        }
    }

}