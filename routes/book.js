var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Blog = require('../models/Book.js');
var Contacto = require('../models/Contacto.js');

/* GET ALL BLOG*/
router.get('/', function (req, res, next) {
    Blog.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE BOOK BY ID 
router.get('/:id', function (req, res, next) {
    Book.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
*/
//SAVE BOOK 
router.post('/', function (req, res, next) {
    Contacto.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE BOOK 
router.put('/:id', function (req, res, next) {
    Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE BOOK 
router.delete('/:id', function (req, res, next) {
    Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
*/
module.exports = router;