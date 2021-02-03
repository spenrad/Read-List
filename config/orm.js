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

    insertOne(val, cb){
        var query ="INSERT INTO books (titleAuth) VALUES ";
        query += "( ";
        query += "? ";
        query += ")";
        
        connection.query(query, val, function(err, result) {
            if (err) {
                throw err
            };
            cb(result);
        });
    },

    updateOne(condition, cb){
        connection.query(`UPDATE books SET finished = true WHERE ${condition}`, function(err){
            if (err) {
                throw err
            };
            cb(results);
        })
    }
};

module.exports = orm;