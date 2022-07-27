const Employee = require("./Employee");

const internQuestions = [

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
        name: 'school',
        message: "school:"
    }

]

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

	getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}

}

module.exports = { Intern, internQuestions };