let msg = 'Hello Node';
console.log(msg);


let fs = require('fs');
let files = fs.readdirSync('/gallery');

console.log(files);