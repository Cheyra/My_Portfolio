//server/routes/routes.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// this name will change depending on what database you create (see ../../models)
var Choice = require('../../models/index');

//retrieves everything in database
router.get('/', function(req, res){
  res.render('index')
});

// adds to database
router.route('/insert')
.post(function(req,res) {
 var choice = new Choice();
  choice.surveyChoice = req.body.surveyChoice;
  

choice.save(function(err) {
      if (err)
        res.send(err);
      res.send('Survey Choice successfully added!');
  });
})





// can be modified to retrieve all entries that match a certain query
router.get('/getAll',function(req, res) {
 //insert query 
 Choice.find()
 .then(dbModel => res.json(dbModel))
});

module.exports = router;