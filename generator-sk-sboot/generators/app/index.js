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

    prompting() {
        /*
        return this.prompt([{
            type: 'input',
            name: 'packageJava',
            message: 'Digite o nome do pacote java',
            default: `br.jus.tre_pa.${dotCase(this.options.appname)}`,
            validate: function(answers) {
                let packageJavaPattern = /^([a-zA-Z_]{1}[a-zA-Z]*){2,10}\.([a-zA-Z_]{1}[a-zA-Z0-9_]*){1,30}((\.([a-zA-Z_]{1}[a-zA-Z0-9_]*){1,61})*)?$/;
                if(packageJavaPattern.test(answers.packageJava)) {
                    return true;
                }
                return 'Nome de pacote java inválido.'
            }
        }]).then((answers) => {
            this.answers = answers;
        });
        */
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