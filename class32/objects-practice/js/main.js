// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism

class Contractor {
  constructor(name, role) {
    this._name = name;
    this._role = role;
  }
  get name() {
    return this._name;
  }
  get role() {
    return this._role;
  }
  sayHello() {
    console.log(
      `Hello I'm ${this._name} on the ${this._role} team at #100Devs!`
    );
  }
  sayBye() {
    console.log(`It has been a pleasure working with you, see you tomorrow!`);
  }
}

class Front extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }
  sayHello() {
    console.log(
      `Hello I'm ${this._name} on the ${this._role} team at #100Devs and I use ${this._tech}!`
    );
  }
}

class Back extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }
  sayHello() {
    console.log(
      `Hello I'm ${this._name} on the ${this._role} team at #100Devs and I use ${this._tech}!`
    );
  }
}

class FullStack extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }
  sayHello() {
    console.log(
      `Hello I'm ${this._name} on the ${this._role} team at #100Devs and I use ${this._tech}!`
    );
  }
}

let azra = new Contractor("Azra", "still learning");
let danijel = new Front("Danijel", "Front-End", "React JS");
let eniz = new Back("Eniz", "Back-End", "Node JS");
let caja = new Front("Eldar", "Front-End", "Vue JS");
let dalija = new FullStack("Dalija", "Full Stack", "MERN Stack");

let agency = [danijel, eniz, caja, azra, dalija];
for (let person of agency) {
  person.sayHello();
}
agency.forEach((person) => person.sayBye());
// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
