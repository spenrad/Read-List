const orm = require('../config/orm.js');

const book = {
  selectAll(cb) {
    orm.selectAll('books', (res) => cb(res));
  },
  
  insertOne(cols, vals, cb) {
    orm.insertOne('books', cols, vals, (res) => cb(res));
  },
  updateOne(bool, condition, cb) {
    orm.updateOne('books', bool, condition, (res) => cb(res));
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = book;
