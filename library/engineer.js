const Employee = require("./Employee");

const engineerQuestions = [

    {
        type: 'input',
        name: 'name',
        message: "name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "id:"
    },
    {
        type: 'input',
        name: 'email',
        message: "email:"
    },
    {
        type: 'input',
        name: 'github',
        message: "github:"
    }

]

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.github = github;
    }

	getGit() {
		return this.github;
	}

	getRole() {
		return 'engineer';
	}

}

module.exports = { Engineer, engineerQuestions };