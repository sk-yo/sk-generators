var Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
/*
 * Gerador de scaffolding de projeto angular2.
 */
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        // Argumento opcional com o nome da aplicação.
        this.argument('appname', { type: String, desc: 'Nome da aplicação.' });
    }

    writing() {
        
        this._changeDefaultDestinationRoot();
        this._createDirectories();
        this._copyCoreFiles();
        this._copyEnvironmentsFiles();
        this._copyAppFiles();
        this._copyAppViewMngtFiles();
        this._copyAppViewSysFiles();
        this._copyAppViewUserFiles();
        this._restoreDefaultDestinationRoot();
    }

    _changeDefaultDestinationRoot() {
        this.defaultDestinationRoot = this.destinationRoot();
        let basedir = this.options.appname.endsWith('-angular2') ? this.options.appname : `${this.options.appname}-angular2`;
        mkdirp(basedir);
        this.destinationRoot(this.destinationPath(basedir));
    }

    _restoreDefaultDestinationRoot() {
        this.destinationRoot(this.defaultDestinationRoot);
    }

    _createDirectories() {
        mkdirp('src/app/component');
        mkdirp('src/app/directive');
        mkdirp('src/app/domain');
        mkdirp('src/app/service');
        mkdirp('src/app/view');
        mkdirp('src/app/view/mngt');
        mkdirp('src/app/view/sys');
        mkdirp('src/app/view/user');
    }

    _copyCoreFiles() {
        let templateOptions = { appname: this.options.appname };
        this.fs.copy(this.templatePath('src/favicon.ico'), this.destinationPath('src/favicon.ico'));
        this.fs.copyTpl(this.templatePath('src/index.html'), this.destinationPath('src/index.html'), templateOptions);
        this.fs.copy(this.templatePath('src/main.ts'), this.destinationPath('src/main.ts'));
        this.fs.copy(this.templatePath('src/polyfills.ts'), this.destinationPath('src/polyfills.ts'));
        this.fs.copy(this.templatePath('src/styles.scss'), this.destinationPath('src/styles.scss'));
        this.fs.copy(this.templatePath('src/test.ts'), this.destinationPath('src/test.ts'));
        this.fs.copy(this.templatePath('src/theme.scss'), this.destinationPath('src/theme.scss'));
        this.fs.copy(this.templatePath('src/tsconfig.app.json'), this.destinationPath('src/tsconfig.app.json'));
        this.fs.copy(this.templatePath('src/tsconfig.spec.json'), this.destinationPath('src/tsconfig.spec.json'));
        this.fs.copy(this.templatePath('src/typings.d.ts'), this.destinationPath('src/typings.d.ts'));
        this.fs.copyTpl(this.templatePath('angular-cli.json'), this.destinationPath('angular-cli.json'), templateOptions);
        this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
        this.fs.copy(this.templatePath('karma.conf.js'), this.destinationPath('karma.conf.js'));
        this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), templateOptions);
        this.fs.copy(this.templatePath('protractor.conf.js'), this.destinationPath('protractor.conf.js'));
        this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'));
        this.fs.copy(this.templatePath('tslint.json'), this.destinationPath('tslint.json'));
    }

    _copyEnvironmentsFiles() {
        this.fs.copy(this.templatePath('src/environments/**'), this.destinationPath('src/environments'));
    }

    _copyAppFiles() {
        this.fs.copy(this.templatePath('src/app/app-routing.module.ts'), this.destinationPath('src/app/app-routing.module.ts'));
        this.fs.copy(this.templatePath('src/app/app.component.css'), this.destinationPath('src/app/app.component.css'));
        this.fs.copy(this.templatePath('src/app/app.component.html'), this.destinationPath('src/app/app.component.html'));
        this.fs.copy(this.templatePath('src/app/app.component.spec.ts'), this.destinationPath('src/app/app.component.spec.ts'));
        this.fs.copy(this.templatePath('src/app/app.component.ts'), this.destinationPath('src/app/app.component.ts'));
        this.fs.copy(this.templatePath('src/app/app.module.ts'), this.destinationPath('src/app/app.module.ts'));
    }

    _copyAppViewMngtFiles() {
        this.fs.copy(this.templatePath('src/app/view/mngt/**'), this.destinationPath('src/app/view/mngt'));
    }

    _copyAppViewSysFiles() {
        this.fs.copy(this.templatePath('src/app/view/sys/**'), this.destinationPath('src/app/view/sys'));
    }

    _copyAppViewUserFiles() {
        this.fs.copy(this.templatePath('src/app/view/user/**'), this.destinationPath('src/app/view/user'));
    }

};