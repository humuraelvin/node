

const validator = require('./data_validation');

console.log(validator.isString('Hello')); 
console.log(validator.isNumber(123)); 
console.log(validator.isDate(new Date())); 
console.log(validator.isEmail('example@email.com')); 
console.log(validator.isURL('http://example.com')); 
