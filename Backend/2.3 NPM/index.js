//var generateName = require('sillyname');

// add the type: module and you need to do the import
import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

import superheroName from "superheroes";
var superhero = superheroName.random();
console.log(`My name is ${superhero}!`);