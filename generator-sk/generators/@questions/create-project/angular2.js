const Question = require('../../@questions/question');

module.exports = class Angular2CreateProjectClass extends Question {
    constructor(gen, options) {
        super(gen, options);
        this.questions.push({
            type: 'input',
            name: 'projectName',
            message: 'Digite o nome do projeto:'
        });
    }

    /**
    * Mostra as questions.
    */
    promptQuestions() {
        return this.prompt().then((response) => {
            this.userOptions.appname = response['projectName'];
            this.execute();
        });
    }

    execute() {
        this.gen.composeWith(require.resolve('generator-sk-angular2/generators/app'), {
            arguments: [
                `${this.userOptions.appname}`
            ]
        });
    }
}