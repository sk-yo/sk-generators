var inquirer = require('inquirer');
const SpringBootCreateProjectClass = require('../create-project/springboot');
var Question = require('../../@questions/question');

module.exports = class CreateProjectClass extends Question {
    /**
     * 
     * @param {*} destinationPath 
     */
    constructor(options) {
        super(options);
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
        console.log(this.dirname);
        console.log(this.appName);
        return this.prompt().then((answers) => {
            if (answers.createProjectChoiceItem === 'Spring Boot') {
                let springBootCreateProject = new SpringBootCreateProjectClass(this.destinationPath);
                return springBootCreateProject.promptQuestions();
            }
        });
    }

}