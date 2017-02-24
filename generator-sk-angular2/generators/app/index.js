var Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
/*
 * Gerador de scaffolding de projeto angular2.
 */
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        // Argumento opcional com o nome da aplicação.
        this.argument('appname', {type: String, desc: 'Nome da aplicação.'});
    }

    writing() {
        
        mkdirp(this.options.appname);
        this.destinationRoot(this.destinationPath(this.options.appname));

        mkdirp('src/app/component');
        mkdirp('src/app/directive');
        mkdirp('src/app/domain');
        mkdirp('src/app/service');
        mkdirp('src/app/view');
        mkdirp('src/app/view/mngt');
        mkdirp('src/app/view/sys');
        mkdirp('src/app/view/user');

        //copy src/app/app.module.ts
        this.fs.copy(this.templatePath('src/app/app.module.ts'), this.destinationPath('src/app/app.module.ts'));

         //copy src/environments/*
        this.fs.copy(this.templatePath('src/environments/**'), this.destinationPath('src/environments'));

        this.fs.copy(this.templatePath('src/favicon.ico'), this.destinationPath('src/favicon.ico'));

        this.fs.copyTpl(this.templatePath('src/index.html'),this.destinationPath('src/index.html'),
            {appname: this.options.appname}
        );

        this.fs.copy(this.templatePath('src/main.ts'), this.destinationPath('src/main.ts'));

        this.fs.copy(this.templatePath('src/polyfills.ts'), this.destinationPath('src/polyfills.ts'));

        this.fs.copy(this.templatePath('src/styles.css'), this.destinationPath('src/style.css'));

        this.fs.copy(this.templatePath('src/test.ts'), this.destinationPath('src/test.ts'));

        this.fs.copy(this.templatePath('src/tsconfig.json'), this.destinationPath('src/tsconfig.json'));

        this.fs.copy(this.templatePath('src/typings.d.ts'), this.destinationPath('src/typings.d.ts'));

        //copy .gitignore
        this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));

        //copy angular-cli.json
         this.fs.copyTpl(this.templatePath('angular-cli.json'),this.destinationPath('angular-cli.json'),
            {appname: this.options.appname}
        );
        
        //copy karma.config.js
        this.fs.copy(this.templatePath('karma.conf.js'), this.destinationPath('karma.conf.js'));
        
        //copy package.json
        this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'),
            {appname: this.options.appname}
        );

        //copy protactor.conf.js
        this.fs.copy(this.templatePath('protractor.conf.js'), this.destinationPath('protractor.conf.js'));

        //copy tslint.json
        this.fs.copy(this.templatePath('tslint.json'), this.destinationPath('tslint.json'));
    }

};