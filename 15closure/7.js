// Write a function createFieldValidator that validates multiple form fields with custom validation rules.


function createFieldValidator() {
  //Your code here
}

// Usage
const validator = createFieldValidator();
validator.addField('email', value => value.includes('@'));
console.log(validator.validate('email', 'test@example.com')); // true
console.log(validator.validate('email', 'testexample.com')); // false

  