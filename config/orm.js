const connection = require('./connection.js');

const orm = {
    selectAll(cb){
        connection.query("SELECT * FROM books", function(err, result) {
            if (err) {
                throw err
            };
            cb(result); 
        });
    },

    insertOne(cb){
        connection.query("INSERT INTO books VALUES ?", function(err, result) {
            if (err) {
                throw err
            };
            cb(result);
        });
    },

    updateOne(){}
};

module.exports = orm;