const fs = require("fs");

exports.getitems = (req, res, next, db) => {
  const page = +req.query.page || 1;
  const size = +req.query.size || 10;
  const sortby = req.query.sortby;
  const sortorder = req.query.sortorder;
  const filterBy = req.query.filterBy;
  const type = req.query.type;

  let totalItems;
  console.log(req.query);
  let sort = {};
  if (sortorder && sortby) {
    sort = {
      [sortby]: sortorder === "ascend" ? 1 : -1,
    };
  }
  let filter = {};
  if (filterBy && filterBy.length) {
    filter = type === "odi" ? {"match_result":{"$in":JSON.parse(filterBy)}} : { Result: {"$in":JSON.parse(filterBy)} };
  }
  console.log(filter);

  db.find(filter)
    .countDocuments()
    .then((numProducts) => {
      totalItems = numProducts;
      return db
        .find(filter)
        .sort(sort)
        .collation({locale: 'en_US', numericOrdering: true})
        .skip((page - 1) * size)
        .limit(size);
    })
    .then((products) => {
      res.json({
        records: products,
        total: totalItems,
      });
      next();
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
