const SpringBootCreateProjectClass = require('./create-project/springboot');
const Angular2CreateProjectClass = require('./create-project/angular2');
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

        /**
         * Exibe as opções de criação de projeto caso o diretório corrente não seja nem uma app angular2, sboot ou ambas.
         */
        this.questions.push({
            type: "list",
            name: "createProjectChoiceItem",
            message: "Que tipo de projeto você deseja criar?",
            choices: [
                "Angular 2",
                "Spring Boot",
                "Spring Boot + Angular 2"
            ],
            when: (answers) => {
                return this.isNoApp();
            }
        });

        this.questions.push({
            type: "list",
            name: "mainChoiceItem",
            message: "O que você deseja fazer?",
            choices: [
                "Gerar artefato",
                "Rodar aplicação",
                "Realizar deploy da aplicação"
            ],
            when: (answers) => {
                return !this.isNoApp();
            }
        });

    }


    /**
     * Mostra as questions.
     */
    promptQuestions() {
        /*
        if (this.isNoApp()) {
            let createProject = new CreateProjectClass(this.gen, this.options);
            return createProject.promptQuestions();
        }*/
        return this.prompt().then((response) => {
            this.userOptions.createProjectChoiceItem = response['createProjectChoiceItem'];
            this.userOptions.mainChoiceItem = response['mainChoiceItem'];
            if(this.userOptions.createProjectChoiceItem) {
                this._createProject();
            }
            /*
            if (this.isSbootApp()) {
                if (this.userOptions.mainChoiceItem === 'Gerar artefato') {
                }
            }
            */
        });
    }

    _createProject() {
        if ( this.userOptions.createProjectChoiceItem === 'Spring Boot') {
            let springBootCreateProject = new SpringBootCreateProjectClass(this.gen, this.options);
            return springBootCreateProject.promptQuestions();
        } else if ( this.userOptions.createProjectChoiceItem === 'Angular 2') {
            let angular2CreateProject = new Angular2CreateProjectClass(this.gen, this.options);
            return angular2CreateProject.promptQuestions();
        } else if ( this.userOptions.createProjectChoiceItem === 'Spring Boot + Angular 2') {

        }
    }

}