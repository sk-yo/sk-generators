const Question = require('../../@questions/question');

module.exports = class SpringBootCreateProjectClass extends Question {
    constructor(gen, options) {
        super(gen, options);
        this.questions.push({
            type: 'input',
            name: 'projectName',
            message: 'Digite o nome do projeto:'
        });
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
        return this.prompt().then((response) => {
            this.userOptions.appname = response['projectName'];
            this.userOptions.jpa = response.sbootCreateProjectChoiceItem.indexOf('JPA') !== -1;
            this.userOptions.keycloak = response.sbootCreateProjectChoiceItem.indexOf('Keycloak') !== -1;
            this.execute();
        });
    }

    execute() {
        this.gen.composeWith(require.resolve('generator-sk-sboot/generators/app'), {
            arguments: [
                `${this.userOptions.appname}`
            ],
            keycloak: this.userOptions.keycloak,
            jpa: this.userOptions.jpa
        });
    }


}