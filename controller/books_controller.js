const express = require('express');
const router = express.Router();

const book = require('../models/book.js');

router.get('/', function (req, res) {
    book.selectAll()
});

router.post('/api/books', function (req, res){
    book.insertOne()
});

router.put('/api/books/:id', function (req, res){
    const conditon = `id = ${req.params.id}`;

    book.updateOne()
});

module.exports = router;