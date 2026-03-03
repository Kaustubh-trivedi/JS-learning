
function CreateUser(firstName, lastName, age) {  //This is constructor function
  this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
};
CreateUser.prototype.getAgeYear = function () {
  // console.log("This",this)
  return new Date().getFullYear() - this.age
}
CreateUser.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName
}
const user1 = new CreateUser("Ravi", "Singh", 33);
const user2 = new CreateUser("Abhi", "Mishra", 30);
console.log(user1.getAgeYear(), user1.getFullName());

// Problem -> if we have more prototype functions it will be hectic, so classes were introduced. It's same but just a syntactical sugar.

class CreateUserClass { }

//we can use same with calss
CreateUserClass.prototype.getAgeYear = function () {
  // console.log("This",this)
  return new Date().getFullYear() - this.age
}
CreateUserClass.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName
}
console.dir(CreateUserClass);
const user3 = new CreateUserClass();


//so what is difference by using class, 
//The answer is we can use this like below and the functions will be stored inside prototype of class
class CreateUserClass2 {
  constructor(fn, ln, age) {
    console.log(this)  //-> This will point to the object of the class.
    //constructor alwaays runs even without calling
    this.firstName = fn;
    this.lastName = ln;
    this.age = age;
  }
  getAgeYear2() {
    return new Date().getFullYear() - this.age
  }
  getFullName() {
    return this.firstName + " " + this.lastName
  }
}

const user4= new CreateUserClass2('IChigo',"Kurosaki",32)