function User(data) {
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.age = data.age;
}

User.prototype.greet = function() {
    return `Hello ${this.firstname} ${this.lastname}, you are ${this.age} years old!`;
};

const user = new User({
    firstname: 'John',
    lastname: 'Doe',
    age: 22
});

console.log( user.greet() );
