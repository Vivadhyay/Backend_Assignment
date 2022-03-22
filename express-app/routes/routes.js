const express = require("express");
const path = require("path");
const router = express.Router();

const battingDb = require("../models/batting");
const fieldingDb = require("../models/fielding");
const odiDb = require("../models/odi");

const batting = path.resolve(__dirname, "../data/sachin_Test_batting.csv");
const fielding = path.resolve(__dirname, "../data/sachin_Test_fielding .csv");
const odi = path.resolve(__dirname, "../data/sachin_odi.csv");

const { dataupload } = require("../controllers/uploadfile");
const {getitems} = require('../controllers/pagination');

// router.post("/odi", (req, res) => dataupload(req, res, odiDb, odi));
// router.post("/feidling", (req, res) => dataupload(req, res, odiDb, odi));
// router.post("/batting", (req, res) => dataupload(req, res, odiDb, odi));

router.post("/upload", (req, res) => {
  const { type } = req.body;
  if (type === "odi") {
    dataupload(req, res, odiDb, odi);
  }
  if (type === "batting") {
    dataupload(req, res, battingDb, batting);
    console.log(battingDb);
  }
  if (type === "fielding") {
    dataupload(req, res, fieldingDb, fielding);
  }
  if (type === "all") {
    dataupload(req, res, odiDb, odi);
    dataupload(req, res, battingDb, batting);
    dataupload(req, res, fieldingDb, fielding);
  }
});

router.get("/fetch", (req, res, next) => {
  const { type } = req.query;
  if (type === "odi") {
    getitems(req, res, next, odiDb);
  }
  if (type === "batting") {
    getitems(req, res, next, battingDb);
  }
  if (type === "fielding") {
    getitems(req, res, next, fieldingDb);
  }
});

// router.get("/odi", (req, res) => getitems(req, res, next, odiDb));
// router.get("/feidling", (req, res) => getitems(req, res, next, odiDb));
// router.get("/batting", (req, res) => getitems(req, res, next, odiDb));

module.exports = router;
