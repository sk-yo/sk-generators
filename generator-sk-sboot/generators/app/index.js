var Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const _ = require('lodash');
var dotCase = require('dot-case');
/*
 * Gerador de scaffolding de projeto springboot.
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

        let groupId = `br.jus.tre_pa.${dotCase(this.options.appname)}`;
        let packageDir = _.split(groupId, '.').join('/');

        //this.log(`groupId: ${groupId}`);
        //this.log(`packageDir: ${packageDir}`)
        mkdirp(`src/main/java/${packageDir}/domain`);
        mkdirp(`src/main/java/${packageDir}/repository`);
        mkdirp(`src/main/java/${packageDir}/service`);
        mkdirp(`src/main/java/${packageDir}/rest`);

        mkdirp(`src/main/test/${packageDir}/service`);
        mkdirp(`src/main/test/${packageDir}/rest`);
    }
}