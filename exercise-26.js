function Person(firstName, lastName) {
this.name=firstName;
this.surname=lastName;
this.fullName = () => `${this.name} ${this.surname}`;

}


const john = new Person("John", "Doe");
const simon = new Person("Simon", "Collins");

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins