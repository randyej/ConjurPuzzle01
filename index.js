#!/usr/bin/env node
//const argv = require('yargs').argv;
const Base64Util = require('./src/Base64Util');

const base64String = 'YHt1dzKJgYR9QDJggYkyfneGOYUydXpzgHl3Moh3gId3TDJ2gXV9d4Qygod+fjJ1gYB8h4R7gHVBdneId36BgneEP4OHe4w=';
// ascii: `{uw2 }@2`  2~w92uzsywwwL2vu}w2~~2u|{uAvw~w?{
//          uwwuzsywwwLvuwuuAvww
const decoded = Base64Util.decode(base64String);

console.log(`\n  |> Decoded string: ${decoded}\n`);


// const strToEnc = 'String to encode...';
// const encoded = Base64Util.encode(strToEnc);
// console.log(`\n  |> Encoded string: ${encoded}\n`);

// const decoded = Base64Util.decode(encoded);
// console.log(`\n  |> Decoded string: ${decoded}\n`);
