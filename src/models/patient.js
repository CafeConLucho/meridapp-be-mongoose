const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dni_type: String,
  dni_number: Number
}, {
  collection: 'patients'
});

/* patientSchema.methods.sayHello = function () {
  const message = this.firstName? `Hola! Soy ${this.firstName}` : 'Hola soy NN';
  console.log(message);
}; */

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;