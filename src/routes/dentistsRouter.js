const express = require('express');
const mongoose = require('mongoose');
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
      Dentist.find({ _id: req.params.id }, function (err, dentist) {
        if (err) {
          console.log('Error => ' + err);
          res.send('Dentist/id GET error');
        } else {
          console.log('Dentist found =>' + dentist);
          res.send(dentist);
        }
      });
    })
    
    .put((req, res) => {
      Dentist.findByIdAndUpdate(req.params.id, { name: req.body.name }, function(err, dentist) {
        Dentist.findById({_id: req.params.id}, function(err, updatedDentist) {
          if (err) {
            console.log('Error => ' + err);
            res.send('Dentist/id PUT error');
          } else {
            console.log('Dentist updated => ' + updatedDentist);
            res.send(updatedDentist);
          }
        }); 
      });
    })
    
    .delete((req, res) => {
      Dentist.findByIdAndRemove({_id: req.params.id}, function(err, deletedDentist) {
        if (err) {
          console.log('Error => ' + err);
          res.send('Dentist/id DELETE error');
        } else {
          console.log('Dentist deleted => ' + deletedDentist);
          res.send(deletedDentist);
        }
      });
    });

  return dentistsRouter;
}

module.exports = router;
