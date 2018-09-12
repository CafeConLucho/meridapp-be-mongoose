const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dni: {
    type: { type: String, required: true },
    number: { type: Number, required: true }
  },
  medicalInsurance: {
    medicalInsuranceId: { type: mongoose.Schema.Types.ObjectId },
    affiliateNumber: { type: String }
  },
  birthday: { type: Date, required: true },
  phone:  { type: String, required: true }
}, {
  collection: 'patients'
});

/* patientSchema.methods.sayHello = function () {
  const message = this.firstName? `Hola! Soy ${this.firstName}` : 'Hola soy NN';
  console.log(message);
}; */

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;