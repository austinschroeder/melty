const express = require('express');
const db = require('../models/index');
const router = express.Router();
//////////////////////////////////////////
//CURRENT ROUTE - /brands
//////////////////////////////////////////


//Show list of all brands ROUTE(Index)
router.get('/', (req, res) => {
    res.render('brands/brandsIndex');

    //GET all Brands from DB
    db.Brand.find({}, (error, allBrands) => {
        if (error) return console.log(error)

        res.render('brands/brandsIndex', { brandsArray: allBrands });
    });
});


//Show a form to add new brand ROUTE
router.get('/new', (req, res) => {
    res.render('brands/brandsNew')
});  


//Handle POST request to add NEW BRAND (from brandsNew.ejs form)
router.post('/', (req, res) => {
    // console.log(req.body);
    // - GET FORM data from request body(brandsNew.ejs)
    db.Brand.create(req.body, (error) => {
        if (error) {
            console.log(error);
        } else {
            // console.log(createdBrand);
        }
        //Redirect back to Brands index page after Submitting
        res.redirect('/brands');

    });


    // - Redirect back to brands Index page AFTER submitting
    res.redirect('/brands');
});



//EXPORT to server.js
module.exports = router;