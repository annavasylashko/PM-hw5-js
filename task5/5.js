'use strict'
let str1 = prompt("Enter first setence")
let str2 = prompt("Enter second sentence")

const regexp = new RegExp(str2, 'g', 'i')

const array = [...str1.matchAll(regexp)]

let output = `There is ${array.length} repetitions of ${str2} in str${str1} `;
output += array.length ? `:\nRepetitions are on these indexes: ${array.map(rep => rep['index']).join(', ')}` : ''

alert(output)