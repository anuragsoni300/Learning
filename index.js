const fs = require('fs');

fs.writeFileSync('a.txt', 'Hi i am anurag.');
const data = fs.readFileSync('a.txt', 'utf-8');
console.log(data);