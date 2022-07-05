const Employee = require('./Employee');

class Manager extends Employee {
	constructor({ name, id, email, number }) {
		super({ name, id, email });

		this.number = number;
		this.role = 'Manager';
	}

	getRole() {
		return 'Manager';
	}
	getOfficeNumber() {
		return this.number;
	}
}

module.exports = Manager;
