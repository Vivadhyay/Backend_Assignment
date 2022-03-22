const csv = require('csvtojson');
const path = require('path');

exports.dataupload = (req, res, db, url ) => {
    csv()
.fromFile(url)
.then((jsonObj)=>{
	console.log(jsonObj);
    db.insertMany(jsonObj, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.send({ model: "Updated" });
          console.log(db);
        }
      });
})
};