const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  code: String,
  name: String,
  description: String,
  value: Number
}, {
  collection: 'jobs'
});

/* jobSchema.methods.sayHello = function () {
  const message = this.name? `Hola! Soy ${this.name}` : 'Hola soy NN';
  console.log(message);
}; */

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;