const express = require('express');
const router = express.Router();

const book = require('../models/book.js');

router.get('/', function (req, res) {
    book.selectAll( function(data) {
        const hbsObject = {
            books : data
        };
        res.render('inndex', hbsObject);
    })
});

router.post('/api/books', function (req, res){
    book.insertOne(['titleAuth'], [req.body.titleAuth], function (result) {
        res.json({ id: result.insertId });
    })
});

router.put('/api/books/:id', function (req, res){
    const conditon = `id = ${req.params.id}`;

    book.updateOnes(
        {
          finished : req.body.finished
        },
        condition, function(result) {
            if(result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    )
});

module.exports = router;