const SpringBootCreateProjectClass = require('../create-project/springboot');
const Angular2CreateProjectClass = require('../create-project/angular2');
const Question = require('../../@questions/question');

module.exports = class CreateProjectClass extends Question {
    /**
     * 
     * @param {*} destinationPath 
     */
    constructor(gen, options) {
        super(gen, options);
        this.questions.push({
            type: "list",
            name: "createProjectChoiceItem",
            message: "Que tipo de projeto você deseja criar?",
            choices: [
                "Angular 2",
                "Spring Boot",
                "Spring Boot + Angular 2"
            ]
        });
    }

    /**
     * Mostra as questions.
     */
    promptQuestions() {
        return this.prompt().then((answers) => {
            if (answers.createProjectChoiceItem === 'Spring Boot') {
                let springBootCreateProject = new SpringBootCreateProjectClass(this.gen, this.options);
                return springBootCreateProject.promptQuestions();
            } else if (answers.createProjectChoiceItem === 'Angular 2') {
                let angular2CreateProject = new Angular2CreateProjectClass(this.gen, this.options);
                return angular2CreateProject.promptQuestions();
            } else if (answers.createProjectChoiceItem === 'Spring Boot + Angular 2') {
                
            }
        });
    }

}