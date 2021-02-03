const orm = require('../config/orm.js');

const book = {
  selectAll(cb) {
    orm.selectAll(function(res) {
      cb(res)
    });
  },
  
  insertOne(cb) {
    orm.insertOne((res) => cb(res));
  },
  updateOne(bool, condition, cb) {
    orm.updateOne(bool, condition, (res) => cb(res));
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = book;
