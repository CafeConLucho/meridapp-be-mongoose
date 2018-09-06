const express = require('express');
const Job = require('../models/job');

const jobsRouter = express.Router();

function router() {
  jobsRouter.route('/')
    .get((req, res) => {
      Job.find({}, function (err, jobs) {
        if (err) {
          console.log('Error => ' + err);
          res.send('patients GET error');
        } else {
          console.log('patient =>' + jobs);
          res.send(jobs);
        }
      });
    })  
    
    .post((req, res) => {
      const { code, name, description, value } = req.body;
      Job.create({ code, name, description, value }, function(err, createdJob) {
        if (err) {
          console.log('Error => ' + err);
          res.send('Patients POST error');
        } else {
          console.log('new patient => ' + createdJob);
          res.send(createdJob);
        }
      });
    });

  jobsRouter.route('/:id')
    .get((req, res) => {
      Job.find({_id: req.params.id}, function (err, job) {
        if (err) {
          console.log('Error => ' + err);
          res.send('Dentist GET error');
        } else {
          console.log('dentists =>' + job);
          res.send(job);
        }
      });
    })  
    
    .put((req, res) => {
      //const {firstName, lastName, dni_type, dni_number} = req.body;
      Job.findByIdAndUpdate(req.params.id, req.body, function(err, job) {
        Job.find({_id: job.id}, function(err, updatedJob) {
          if (err) {
            console.log('Error => ' + err);
            res.send('Dentist PUT error');
          } else {
            console.log('Updated dentist => ' + updatedJob);
            res.send(updatedJob);
          }
        });
      });
    })
    
    .delete((req,res) => {
      Job.findByIdAndRemove(req.params.id, function(err, deletedJob) {
        if (err) {
          console.log('Error => ' + err);
          res.send('Dentist DELETE error');
        } else {
          console.log('Deleted dentist => ' + deletedJob);
          res.send(deletedJob);
        }
      });
    });

  return jobsRouter;
}

module.exports = router;
