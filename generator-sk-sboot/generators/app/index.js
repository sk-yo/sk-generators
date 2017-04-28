var Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const _ = require('lodash');
const dotCase = require('dot-case');
const chalk = require('chalk');
/*
 * Gerador de scaffolding de projeto springboot.
 */
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        // Argumento opcional com o nome da aplicação.
        this.argument('appname', { type: String, desc: 'Nome da aplicação.' });
        this.option('keycloak');
        this.option('jpa');
    }

    writing() {

        let groupId = `br.jus.tre_pa.${dotCase(this.options.appname)}`;
        let packageName = groupId;
        let packageDir = _.split(groupId, '.').join('/');
        let appClassName = _.upperFirst(_.camelCase(this.options.appname));
        let tplOptions = {
            appname: this.options.appname,
            groupId: groupId,
            appClassName: appClassName,
            packageName: packageName,
            keycloak: this.options.keycloak,
            jpa: this.options.jpa
        }

        this._changeDefaultDestinationRoot();

        this._mkdir(`src/main/java/${packageDir}/domain`);
        this._mkdir(`src/main/java/${packageDir}/exception`);
        this._mkdir(`src/main/java/${packageDir}/repository`);
        this._mkdir(`src/main/java/${packageDir}/service`);
        this._mkdir(`src/main/java/${packageDir}/rest`);

        this.fs.copyTpl(this.templatePath('src/main/resources/application**'), this.destinationPath('src/main/resources/'), tplOptions);

        this._mkdir(`src/main/test/${packageDir}/service`);
        this._mkdir(`src/main/test/${packageDir}/rest`);

        this.fs.copyTpl(this.templatePath('pom.xml'), this.destinationPath('pom.xml'), tplOptions);
        this.fs.copy(this.templatePath('mvnw'), this.destinationPath('mvnw'));
        this.fs.copy(this.templatePath('mvnw.cmd'), this.destinationPath('mvnw.cmd'));
        this.fs.copyTpl(this.templatePath('src/main/java/Application.java'), this.destinationPath(`src/main/java/${packageDir}/${appClassName}Application.java`), tplOptions);
        this.fs.copy(this.templatePath('readme.md'), this.destinationPath('README.md'));

        this._restoreDefaultDestinationRoot();
    }

    _changeDefaultDestinationRoot() {
        this.defaultDestinationRoot = this.destinationRoot();
        let basedir = this.options.appname.endsWith('-sboot') ? this.options.appname : `${this.options.appname}-sboot`;
        this._mkdir(basedir);
        //mkdirp(basedir);
        //this.log(`${chalk.green('   create')} ${basedir}`);
        this.destinationRoot(this.destinationPath(basedir));
    }

    _restoreDefaultDestinationRoot() {
        this.destinationRoot(this.defaultDestinationRoot);
    }

    _mkdir(dir) {
        mkdirp(dir);
        this.log(`${chalk.green('   create')} ${dir}`);
    }
}