const orm = require('../config/orm.js');

const book = {
  selectAll(cb) {
    orm.selectAll(function(res) {
      cb(res)
    });
  },
  
  insertOne(val, cb) {
    orm.insertOne(val, function(res) {

    cb(res)
    });
  },
  updateOne(condition, cb) {
    orm.updateOne(condition, function(res) {
      cb(res)
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = book;
