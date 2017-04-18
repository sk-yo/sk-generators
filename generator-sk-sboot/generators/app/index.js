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

    prompting() {
        var questions = [
            {
                type: 'checkbox',
                name: 'sbootAppOpts',
                message: 'Selecione as opções da Aplicação SpringBoot',
                choices: ['JPA', 'Keycloak']
            }
        ];
    }

    writing() {

        let groupId = `br.jus.tre_pa.${dotCase(this.options.appname)}`;
        let packageName = groupId;
        let packageDir = _.split(groupId, '.').join('/');
        let appClassName = _.upperFirst(_.camelCase(this.options.appname));
        let tplOpts = {
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

        this.fs.copyTpl(this.templatePath('src/main/resources/application**'), this.destinationPath('src/main/resources/'), tplOpts);

        this._mkdir(`src/main/test/${packageDir}/service`);
        this._mkdir(`src/main/test/${packageDir}/rest`);

        this.fs.copyTpl(this.templatePath('pom.xml'), this.destinationPath('pom.xml'), tplOpts);
        this.fs.copy(this.templatePath('mvnw'), this.destinationPath('mvnw'));
        this.fs.copy(this.templatePath('mvnw.cmd'), this.destinationPath('mvnw.cmd'));
        this.fs.copyTpl(this.templatePath('src/main/java/Application.java'), this.destinationPath(`src/main/java/${packageDir}/${appClassName}Application.java`), tplOpts);

        this._restoreDefaultDestinationRoot();
    }

    _changeDefaultDestinationRoot() {
        this.defaultDestinationRoot = this.destinationRoot();
        mkdirp(this.options.appname);
        this.log(`${chalk.green('   create')} ${this.options.appname}`);
        this.destinationRoot(this.destinationPath(this.options.appname));
    }

    _restoreDefaultDestinationRoot() {
        this.destinationRoot(this.defaultDestinationRoot);
    }

    _mkdir(dir) {
        mkdirp(dir);
        this.log(`${chalk.green('   create')} ${dir}`);
    }
}