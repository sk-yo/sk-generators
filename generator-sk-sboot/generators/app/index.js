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

        mkdirp(this.options.appname);
        this.log(`${chalk.green('   create')} ${this.options.appname}`);
        this.destinationRoot(this.destinationPath(this.options.appname));


        mkdirp(`src/main/java/${packageDir}/domain`);
        this.log(`${chalk.green('   create')} src/main/java/${packageDir}/domain`);

        mkdirp(`src/main/java/${packageDir}/exception`);
        this.log(`${chalk.green('   create')} src/main/java/${packageDir}/exception`);

        mkdirp(`src/main/java/${packageDir}/repository`);
        this.log(`${chalk.green('   create')} src/main/java/${packageDir}/repository`);

        mkdirp(`src/main/java/${packageDir}/service`);
        this.log(`${chalk.green('   create')} src/main/java/${packageDir}/service`);

        mkdirp(`src/main/java/${packageDir}/rest`);
        this.log(`${chalk.green('   create')} src/main/java/${packageDir}/rest`);

        this.fs.copyTpl(this.templatePath('src/main/resources/application**'), this.destinationPath('src/main/resources/'),
            {  appname: this.options.appname, keycloak: this.options.keycloak, jpa: this.options.jpa }
        );

        mkdirp(`src/main/test/${packageDir}/service`);
        this.log(`${chalk.green('   create')} src/main/test/${packageDir}/service`);

        mkdirp(`src/main/test/${packageDir}/rest`);
        this.log(`${chalk.green('   create')} src/main/test/${packageDir}/rest`);

        this.fs.copyTpl(this.templatePath('pom.xml'), this.destinationPath('pom.xml'),
            { appname: this.options.appname, groupId: groupId, keycloak: this.options.keycloak, jpa: this.options.jpa }
        );

        this.fs.copy(this.templatePath('mvnw'), this.destinationPath('mvnw'));
        this.fs.copy(this.templatePath('mvnw.cmd'), this.destinationPath('mvnw.cmd'));

        this.fs.copyTpl(this.templatePath('src/main/java/Application.java'), this.destinationPath(`src/main/java/${packageDir}/${appClassName}Application.java`),
            { appname: this.options.appname, groupId: groupId, appClassName: appClassName, packageName: packageName }
        );
    }
}