var Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
/*
 * Gerador de scaffolding de projeto angular2.
 */
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        // Argumento opcional com o nome da aplicação.
        this.argument('appname', {type: String});
    }

    writing() {
        
        mkdirp(this.options.appname);
        this.destinationRoot(this.destinationPath(this.options.appname));

        //copy package.json
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {appname: this.options.appname}
        );

        //copy angular-cli.json
         this.fs.copyTpl(
            this.templatePath('angular-cli.json'),
            this.destinationPath('angular-cli.json'),
            {appname: this.options.appname}
        );

        //copy .gitignore
        this.fs.copy(
            this.templatePath('.gitignore'),
            this.destinationPath('.gitignore')
        );

        //copy karma.config.js
        this.fs.copy(
            this.templatePath('karma.conf.js'),
            this.destinationPath('karma.conf.js')
        );

        //copy protactor.conf.js
        this.fs.copy(
            this.templatePath('protactor.conf.js'),
            this.destinationPath('protactor.conf.js')
        );

        //copy tslint.json
        this.fs.copy(
            this.templatePath('tslint.json'),
            this.destinationPath('tslint.json')
        )
    }

};