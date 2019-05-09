// CODE here for your Lambda Classes
class person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name},  I am from ${this.location}`;
  }
}

class Instructor extends person {
  constructor(personChild) {
    super(personChild);
    this.speciality = personChild.speciality;
    this.favLanguage = personChild.favLanguage;
    this.catchPhrase = personChild.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  addAndSubtract(student) {
    return student.grade + Math.floor(Math.random() * 15 + 1);
  }
}

class student extends person {
  constructor(anotherChild) {
    super(anotherChild);
    this.previousBackground = anotherChild.previousBackground;
    this.className = anotherChild.className;
    this.favSubjects = anotherChild.favSubjects;
    this.grade = anotherChild.grade;
  }
  listSubjects() {
    return `${this.favSubjects}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate() {
    if (this.grade >= 70) {
      return `Congratulations ${this.name}, you have graduated from Lambda!`;
    } else {
      return `Sorry ${this.name}, you need 70 to pass. You are currently on ${
        this.grade
      } Keep working!`;
    }
  }
}

class ProjectManagers extends Instructor {
  constructor(InstructorChild) {
    super(InstructorChild);
    this.gradClassName = InstructorChild.gradClassName;
    this.favInstructor = InstructorChild.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const tobi = new person({
  name: "tobi",
  age: 22,
  location: "Lagos",
  gender: "male"
});

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const tolu = new student({
  name: "tolu",
  location: "ogun",
  age: 13,
  gender: "female",
  favLanguage: "python",
  grade: 50,
  specialty: "back-end",
  catchPhrase: `Don't forget the girls`,
  previousBackground: "Finance",
  className: "csl",
  favSubjects: ["maths", "english", "chemistry"]
});

const maxime = new ProjectManagers({
  name: "maxime",
  location: "paris",
  age: 27,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end/back-end",
  catchPhrase: `You'll never walk alone`,
  gradClassName: "cs12",
  favInstructor: "gabe"
});

console.log(tolu.graduate());
console.log(maxime.debugsCode(tolu, "maths"));
