const express = require('express');
const db = require('../models/index');
const router = express.Router();
//////////////////////////////////////////
//CURRENT ROUTE - /brands
//////////////////////////////////////////


//Show list of all brands ROUTE(Index)
router.get('/', (req, res) => {
    res.render('brands/brandsIndex');
});


//Show a form to add new brand ROUTE
router.get('/new', (req, res) => {
    res.render('brands/brandsNew')
});  


//Handle POST request to add NEW BRAND (from brandsNew.ejs form)
router.post('/', (req, res) => {
    // console.log(req.body);
    // - GET from data from request body(brandsNew.ejs)


    // - Redirect back to brands Index page AFTER submitting
    res.redirect('/brands');
});



//EXPORT to server.js
module.exports = router;