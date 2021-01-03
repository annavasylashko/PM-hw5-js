'use strict'
let upCase = String("ECMAScript 2015 (6th Edition, ECMA-262)".match(/[A-F]/g));
// [A-F] -> Square brackets may contain character ranges. In this case, it searces for every uppercase letter.
// /g -> With this flag, search looks for all matches. Without him - only the first.
console.log(upCase);