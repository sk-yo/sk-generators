const Question = require('../../@questions/question');

/**
 * Classe responsável por criar um projeto SpringBoot.
 */
module.exports = class SpringBootCreateProjectClass extends Question {
    constructor(gen, options) {
        super(gen, options);

        // Question de input para retornar nome do projeto
        this.questions.push({
            type: 'input',
            name: 'projectName',
            message: 'Digite o nome do projeto:'
        });

        //Question com checkbox com opções de projeto SpringBoot.
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
     * Mostra as questions do projeto SpringBoot.
     */
    promptQuestions() {
        return this.prompt().then((response) => {
            this.userOptions.appname = response['projectName'];
            this.userOptions.jpa = response.sbootCreateProjectChoiceItem.indexOf('JPA') !== -1;
            this.userOptions.keycloak = response.sbootCreateProjectChoiceItem.indexOf('Keycloak') !== -1;
            this.execute();
        });
    }

    /**
     * Chama o gerador 'generator-sk-sboot' para criar um projeto SpringBoot 
     */
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