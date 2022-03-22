const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fieldingSchema = new Schema({
    Overs: String,
    Mdns: String,
    Runs: String,
    Wkts: String,
    Econ: String,
    Pos: String,
    Inns: String,
    "Dismisal Made": String,
    "Catch Taken": String,
    Opposition: String,
    Ground: String,
    "Start DateAscending": Date,
    "Match Number": String,
    Result: String,
});

module.exports = mongoose.model('Fielding', fieldingSchema);