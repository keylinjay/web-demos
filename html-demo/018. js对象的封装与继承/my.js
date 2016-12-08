function l (ex) {
	
	return console.log(ex);
}
function Person (name) {
	this.name = name;
}
function Student (name,gran) {
	Person.call(this,name);
	this.gran = gran;
}
var xiaoming = new Student(xiaoming,55);
console.log(xiaoming.name);
console.log(xiaoming.constructor);
l(Student.constructor);
l(Person.constructor);
l(Student.prototype);
l(Student.prototype.constructor);
l(Person.prototype.constructor);
l(Student.prototype.constructor===xiaoming.constructor);