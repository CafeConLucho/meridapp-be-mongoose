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

    dentistsRouter.route('/:id')
    .get((req, res) => {
      Dentist.find({_id: req.params.id}, function (err, dentist) {
        if (err) {
          console.log('Error => ' + err);
          res.send('Dentist GET error');
        } else {
          console.log('dentists =>' + dentist);
          res.send(dentist);
        }
      });
    })  
    
    .put((req, res) => {
      //const dentistName = req.body.name;
      Dentist.findByIdAndUpdate(req.params.id, req.body, function(err, dentist) {
        Dentist.find({_id: dentist.id}, function(err, updatedDentist) {
          if (err) {
            console.log('Error => ' + err);
            res.send('Dentist PUT error');
          } else {
            console.log('Updated dentist => ' + updatedDentist);
            res.send(updatedDentist);
          }
        });
      });
    })
    
    .delete((req,res) => {
      Dentist.findByIdAndRemove(req.params.id, function(err, deletedDentist) {
        if (err) {
          console.log('Error => ' + err);
          res.send('Dentist DELETE error');
        } else {
          console.log('Deleted dentist => ' + deletedDentist);
          res.send(deletedDentist);
        }
      });
    });

  return dentistsRouter;
}

module.exports = router;
