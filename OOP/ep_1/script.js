const user = {
  firstName: "Anurag",
  lastName: "Singh",
  age: 15
}
//get user birth year
function getAgeYear(age) {
  return new Date().getFullYear() - age
};
console.log(getAgeYear(user.age))


//How to make in Object orienterd?
// Encapsulation -> Combine data and logic at one place and don't let ouside world access it
//Abstraction - not showing the complexity  => Here we are hiding the complexity of getAgeYear function. 
const user2 = {
  firstName: "Anurag",
  lastName: "Singh",
  age: 15,
  getAgeYear: function () {
    return new Date().getFullYear() - user2.age
  }
}





//What are factory fucntions?
//let we have multiple users
const user3 = {
  firstName: "KT",
  lastName: "Singh",
  age: 15,
  getAgeYear: function () {
    return new Date().getFullYear() - user2.age
  }
}
const user4 = {
  firstName: "AB",
  lastName: "Singh",
  age: 25,
  getAgeYear: function () {
    return new Date().getFullYear() - user2.age
  }
}
//suppose if we have to create 100 users, it will so much work, so we create factory functions
function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getAgeYear () {
      return new Date().getFullYear() - user.age
    }
  }
  return user
}
const user5 = createUser('aman', "gupta", 43)
const user6 = createUser('parth', "awasthi", 46)
//works good, what is issue now?
//everytime the user is created by createuser fucntion, getAgeYear function is created in seperate memories for each object, it has same feature but everytime consumes different meemory.
console.log(user5.getAgeYear === user6.getAgeYear)  // it is false because different memory lcoations


