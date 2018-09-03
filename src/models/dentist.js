const mongoose = require('mongoose');

const dentistSchema = new mongoose.Schema({
  name: String
}, {
  collection: 'dentists'
});

/* dentistSchema.methods.sayHello = function () {
  const message = this.name? `Hola! Soy ${this.name}` : 'Hola soy NN';
  console.log(message);
}; */

const Dentist = mongoose.model('Dentist', dentistSchema);

module.exports = Dentist;