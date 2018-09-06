const express = require('express');
const Dentist = require('../models/dentist');

const dentistsRouter = express.Router();

function router() {
  dentistsRouter.route('/')
    .get((req, res) => {
      Dentist.find({}, function (err, dentists) {
        if (err) {
          console.log('Error => ' + err);
          res.send('Dentists GET error');
        } else {
          console.log('dentists =>' + dentists);
          res.send(dentists);
        }
      });
    })  
    
    .post((req, res) => {
      const dentistName = req.body.name;
      Dentist.create({ name: dentistName}, function(err, createdDentist) {
        if (err) {
          console.log('Error => ' + err);
          res.send('Dentists POST error');
        } else {
          console.log('new dentist => ' + createdDentist);
          res.send(createdDentist);
        }
      });
    });

  return dentistsRouter;
}

module.exports = router;
