// CODE here for your Lambda Classes

class Person {
	constructor(attributes) {
		this.name = attributes.name;
		this.age = attributes.age;
		this.location = attributes.location;
	}

	speak() {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
	}
}

class Instructor extends Person {
	constructor(attributes) {
		super(attributes);
		this.favLanguage = attributes.favLanguage;
		this.catchPhrase = attributes.catchPhrase;
	}

	demo(subject) {
		console.log(`Today we are learning about ${subject}`);
	}

	grade(student, subject) {
		console.log(`${student.name} recieves a perfect score on ${subject}`);
	}
}

class ProjectManager extends Instructor {
	constructor(attributes) {
		super(attributes);
		this.gradClassName = attributes.gradClassName;
		this.favInstructor = attributes.favInstructor;
	}

	standUp(channelName) {
		console.log(`${this.name} announces to ${channelName}, @channel standy times!`)
	}

	debugCode(student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
	}
}

class Student extends Person {
	constructor(attributes) {
		super(attributes);
		this.className = attributes.className;
		this.favSubjects = attributes.favSubjects;
	}

	listsSubjects() {
		attributes.favSubjects.forEach(subject => console.log(subject));
	}

	PRAssignment(subject) {
		console.log(`${this.student} has submitted a PR for ${subject}`);
	}

	sprintChallenge(subject) {
		console.log(`${this.name} has begin sprint challenge on ${subject}`);
	}
}


