function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getAgeYear() {
      return new Date().getFullYear() - user.age
    }
  }
  return user
}
const user1 = createUser('aman', "gupta", 43)
const user2 = createUser('raman', "gupta", 34)
//The issue with this factory function is that is it taking seperate memory for seperate object.

//how to solve -> Crete a global function but this will again create encapsulation problem.

function getAgeYear2() {
  return new Date().getFullYear() - this.age
}
function createUser2(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getAgeYear2
  }
  return user
};
const user3 = createUser2("ramesh", "wadhwa", 45)
//Jis object ke andr se function ko call krte hai, us object ko point krta hai this keyword
const user4 = createUser2("acvs", "", 43);
console.log(user3.getAgeYear2 === user4.getAgeYear2)  //true because memory me same space pr hai.

//We achieved polymorphism (Many forms using this keyword
// But we've broken the encapsulation , function can be accessed easily.


function createUser3(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getAgeYear3: createUser3.commonMethod.getAgeYear3
  }
  return user
};
createUser3.commonMethod = {   //by doing this, encapsulation is still there, the getAgeyear3 is still capsuled inside createUser3 function
  getAgeYear3() {
    return new Date().getFullYear() - this.age
  }
}
const user5 = createUser3("ramesh", "wadhwa", 45)
const user6 = createUser3("dinesh", "wadhwa", 45)

//Now user5 and user6 both will have getAgeYear3 properties and also this is on the same space in memory.
console.log(user5.getAgeYear3 === user6.getAgeYear3) //true



///PROTOTYPES
//everyfunction in js has prototype propety.
//How to access it?
function sayHi() { console.log("HII") }

console.log(sayHi.prototype)
//IT will have constructor propery. Which basically shows the same function (sayHi- definition)






//new keyword
// if we call a function with new keyword, it returns an object always.
console.log(new sayHi())   //===> Returns object

//this will behave diffrently with both calling
function thishi() { console.log(this) }
thishi(); //=> It is function of window object so this will refer to window object.
new thishi() //-> with new keyword, this will refer to thishi function only.


function createUser4(firstName, lastName, age) {
  this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
};
const user7 = new createUser4("abcd", "efgg", 43); //new keyword will automatically return an object

// ---
//if we have created like this
const user8 = createUser4("fdsf", "fsd", 46);
//there is no return in creteUser4, it willhave undefined value.
//this in this case will be pointing to window object, so the firstnmae = fdsf, lastname= fsd and age=46 will be created in the window objcet.
// ---



//protoype and __proto__
//when we create user7 with createUser4 function, the prototype property of createUser4 (createUser4.prototype) is attached with user7 with __proto__
console.log(user7.__proto__ === createUser4.prototype) //true

//so if we do
console.log(user7.__proto__.constructor)
// or
console.log(user7.constructor) //same thing
// we will get the object returned
// OUTPUT on console
// ƒ createUser4(firstName, lastName, age) {
//   this.firstName = firstName,
//     this.lastName = lastName,
//     this.age = age
// }




//How to put common mehtod in all objects?
function CreateUser5(firstName, lastName, age) {  //This is constructor function
  this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
};
CreateUser5.prototype.getAgeYear5 = function () {
  // console.log("This",this)
  return new Date().getFullYear() - this.age
}
const user9 = new CreateUser5("Ravi", "Singh", 33);
const user10 = new CreateUser5("Abhi", "Mishra", 30);

console.log(user9.getAgeYear5()) 