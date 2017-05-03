const Question = require('../../@questions/question');

/**
 * Classe responsável por criar um projeto SpringBoot.
 */
module.exports = class SpringBootGenArtifactClass extends Question {
    constructor(gen, options) {
        super(gen, options);

        //Question com checkbox com opções de projeto SpringBoot.
        this.questions.push({
            type: "list",
            name: "sbootGenArtifactChoiceItem",
            message: "Qual artefato você deseja gerar?",
            choices: [
                "Classe de Repository",
                "Classe de Service",
                "Classe REST"
            ]
        });
    }

    /**
     * Mostra as questions do projeto SpringBoot.
     */
    promptQuestions() {
        return this.prompt().then((response) => {
            /*
            this.userOptions.appname = response['projectName'];
            this.userOptions.jpa = response.sbootCreateProjectChoiceItem.indexOf('JPA') !== -1;
            this.userOptions.keycloak = response.sbootCreateProjectChoiceItem.indexOf('Keycloak') !== -1;
            this.execute();
            */
        });
    }

    /**
     * Chama o gerador 'generator-sk-sboot' para criar um projeto SpringBoot 
     */
    execute() {
    }


}