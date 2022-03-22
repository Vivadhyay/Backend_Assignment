const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const battingSchema = new Schema ({
    Runs: String,
    Mins: String,
    BF: String,
    "4s": String,
    "6s": String,
    SR: String,
    Pos: String,
    Dismissal: String,
    Inns: String,
    Opposition: String,
    Ground: String,
    "Start DateAscending": Date,
    "Match Number": String,
    Result: String,
});

module.exports = mongoose.model('Batting', battingSchema);