var inquirer = require('inquirer');
const SpringBootCreateProjectClass = require('../create-project/springboot');
var Question = require('../../@questions/question');

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
            }
        });
    }

}