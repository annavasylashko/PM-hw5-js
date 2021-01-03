'use strict'
let num = parseInt("ECMAScript 2015 (6th Edition, ECMA-262)".replace(/\D+/g,""));
// parseInt converts given string into number.
// \D -> Searches for every symbol that is not a number.
//  + -> Matches the preceding item 1 or more times. Equivalent to {1,}. 
// /g -> With this flag, search looks for all matches. Without him - only the first.
// Method .replace searces for everythin matching specified conditions and replaces with "".

console.log(num);
console.log(typeof num);