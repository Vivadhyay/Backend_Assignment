const  mongoose = require('mongoose');

const Schema = mongoose.Schema;

const odiSchema = new Schema ({
    batting_score:String,
      wickets: String,
      runs_conceded: String,
      catches: String,
      stumps: String,
      opposition: String,
      ground: String,
      date: Date,
      match_result: String,
      result_margin: String,
      toss: String,
      batting_innings: String, 
});

module.exports = mongoose.model('ODI', odiSchema);