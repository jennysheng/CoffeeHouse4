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
  create1: function (req, res) {
    var name = req.param('name');
    //var username = req.password.username;
    console.log(username);
    // var password = req.password.password;

    Patient.create({ name: name, medicine: req.param('medicine'), sleepingpattern: req.param('sleepingpattern') }).exec(function (err) {
      if (err) {
        res.status(201);
      }
      res.redirect('/patient/list');

      // res.redirect('/staff/edit');
    })
  },
  create: function (req, res) {
    var name = req.param('name');
    var medicine = req.param('medicine');
    var sleepingpattern = req.param('sleepingpattern');
    let data;
    // to convert category name's first letter capital
    data = { name: name, medicine: medicine, sleepingpattern: sleepingpattern },
      Patient.create(data).fetch().exec(function (err, patient) {
        if (err) return (err);
        res.redirect('/patient/list');
        //  return res.json(patient);

      });
  },
  update: function (req, res) {

    var id = req.param('id');
    var name = req.param('name');
    var medicine = req.param('medicine');
    var sleepingpattern = req.param('sleepingpattern');

    Patient.update({ id: id }, { name: name, medicine: medicine, sleepingpattern: sleepingpattern }).exec(function (err) {
      /*if (err) {
        res.send(500, { error: 'Database Error' });
      }*/
      if (err) return (err);

      res.redirect('/patient/list');


    });
    return false;

  },
  edit: function (req, res) {

    // res.view('edit');
    Patient.findOne({ id: req.params.id }).exec(function (err, patient) {
      if (err) {
        res.send(500, { error: 'Database error' });
      }
      res.view('pages/patient/edit', { patient: patient });
    });

  },
  graph: function (req, res) {

    // res.view('edit');
   /* Patient.findOne({ id: req.params.id }).exec(function (err, patient) {
      if (err) {
        res.send(500, { error: 'Database error' });
      }
    //  res.view('pages/patient/graph', { patient: patient });
  
  
    });*/
    res.view('pages/patient/graph');

  },
  delete: function (req, res) {
    let query;
    query = { id: req.param('id') }
    Patient.destroy(query).fetch().exec(function (err, patient) {
      if (err) return (err);
      res.redirect('/patient/list');
      //  return res.json(patient);
    })
  },
};







