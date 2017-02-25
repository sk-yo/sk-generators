var Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
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
        
    }

    writing() {
    }
}