import {Person, SuperPerson} from "./person";


const bob = new Person('Bob');
const superSarah = new SuperPerson('Sarah', "speed");

console.log(bob.speak("my name is bob"));

superSarah.speak('Hi im sarah');

superSarah.saySuperPower();