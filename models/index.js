var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// can change this schema to name of choosing and can edit 
//and add fields but make sure to update routes(../server/routes)
var schemaChoice = new Schema({
  surveyChoice: String
  });

module.exports = mongoose.model('Choice', schemaChoice);