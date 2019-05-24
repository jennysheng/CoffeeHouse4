/**
 * PatientController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  

  list: function (req, res) {

    Patient.find({}).exec(function (err, patient) {
        if (err) {
            res.status(201);
        }
        res.view('pages/patient/list', { patient: patient });
    });


  },
  add: function (req, res) {
    res.view('pages/patient/add');
},
};
  






