const generatePassword = require('generate-password');

// Générer un mot de passe
const password = generatePassword.generate({
  length: 10,
  numbers: true,
});

console.log(`Generated Password: ${password}`);
