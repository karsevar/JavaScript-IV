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

	modifyGrade() {
		const randomScore = Math.round(Math.random() * (100 - -100) + -100);
		console.log(`${this.name} increases score by ${randomScore}`);
		return randomScore;
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
		this.grade = attributes.grade;
	}

	listsSubjects() {
		console.log(`${this.name} favorite subjects are: `);
		this.favSubjects.forEach(subject => console.log(subject));
	}

	PRAssignment(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`);
	}

	sprintChallenge(subject) {
		console.log(`${this.name} has begin sprint challenge on ${subject}`);
	}

	graduate() {
		if (this.grade >= 70) {
			console.log(`${this.name} graduated from lambda school. Grade is ${this.grade}.`);
		} else {
			console.log(`${this.name} needs more reps`)
		}
	}
}

// === Tests === 

const testStudent = {
	name: 'Mason Karsevar',
	className: 'WEB21',
	favSubjects: ['machine learning', 'natural language processing', 'hiking', 'eating'],
	age: 27,
	location: 'Spokane',
	grade: 20
}

const testInstructor = {
	name: 'Fred',
	location: 'Bedrock',
	age: 37,
	favLanguage: 'JavaScript',
	specialty: 'Front-end',
	catchPhrase: `Don't forget the homies`
}

const testPM = {
	gradClassName: 'WEB21',
	favInstructor: 'Sean',
	name: 'Pat Palmerston',
	age: 32,
	favLanguage: 'JavaScript',
	specialty: 'front-end',
	catchPhrase: 'most excellent',
	location: 'San Francisco'
}

// === Instructor Class test === 

const fred = new Instructor(testInstructor);

console.log(fred); //The object looks fine. No undefineds.

// method tests 
fred.demo('machine learning');
fred.grade(testStudent, 'machine learning');
fred.speak();
// methods all green

// === ProjectManager Class test === 

const pat = new ProjectManager(testPM);

console.log(pat); // The object looks fine. No undefineds in the returned object

// method tests
pat.standUp('WEB21');
pat.debugCode(testStudent, 'less preprocessing');
pat.demo('html design');
pat.grade(testStudent, 'advanced CSS');
pat.speak();
// methods all green


// === Student Class test === 
const mason = new Student(testStudent);
console.log(mason); //The object looks just fine. No undefineds.

// method tests
mason.listsSubjects();
mason.PRAssignment('html design');
mason.sprintChallenge('Basic JavaScript');
mason.speak();
// methods all green

// === Stretch problem tests === 

const testStudent2 = {
	name: 'Chris',
	className: 'WEB21',
	favSubjects: ['machine learning', 'natural language processing', 'hiking', 'eating'],
	age: 27,
	location: 'Austin',
	grade: 20
}

const chris = new Student(testStudent2);

chris.graduate();


chris.grade += pat.modifyGrade();
console.log(chris.grade);
chris.graduate();

