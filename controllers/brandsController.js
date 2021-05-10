const express = require('express');
const db = require('../models/index');
const router = express.Router();
//////////////////////////////////////////
//CURRENT ROUTE - /brands
//////////////////////////////////////////


//Show list of all brands ROUTE(Index)
router.get('/', (req, res) => {
    // res.render('brands/brandsIndex');

    //GET all Brands from DB
    db.Brand.find({}, (error, allBrands) => {
        if (error) return console.log(error);

        res.render('brands/brandsIndex', { brandsArray: allBrands });
    });
});


//Show a form to add new brand ROUTE
router.get('/new', (req, res) => {
    res.render('brands/brandsNew')
});  
// Show one brand:
router.get('/:brandId', (req, res) => {
    // Make a query to get back a brand by its ID
    db.Brand.findById(req.params.brandId, (error, foundBrand) => {
        if (error) return console.log(error);

        res.render('brands/brandsShow', { brand: foundBrand });
    })
});


//Handle POST request to add NEW BRAND (from brandsNew.ejs form)
router.post('/', (req, res) => {
    // - GET FORM data from request body(brandsNew.ejs)
    if (req.body.nuts === 'on') {
            req.body.nuts = true;
        } else {
                req.body.nuts = false;
            }
    db.Brand.create(req.body, (error, newBrand) => {
        if (error) return console.log(error);
                console.log(newBrand);
                // brand.push(req.body);
                //Redirect back to Brands index page after Submitting
                res.redirect('/brands');  
    });
    
});


//After "EDIT" find brand by ID and redirect to EDIT page
router.get('/:id/edit', (req, res) => {
    const brandId = req.params.id;
    //FIND THE BRAND BY ID IN DB
    db.Brand.findById(brandId, (error, foundBrand) => {
        if (error) return console.log(error);
        // Respond by sending to EDIT page with submitted data
        res.render('brands/brandsEdit', { brand: foundBrand });
    });
});

//Handle the FORM submissions
router.put('/:id', (req, res) => {
    const brandId = req.params.id;
    //Find brand by ID in DB
    console.log('before', req.body);
    if (req.body.nuts === 'on') {
        req.body.nuts = true;
    } else {
            req.body.nuts = false;
        }
        console.log('after', req.body);
    db.Brand.findByIdAndUpdate(
        brandId,
        req.body,
        { new: true},
        
        //Stating that we want the updated record and not the original
        (error, updatedBrand) => {
            if (error) {
                return console.log(error);
            } console.log(updatedBrand);
            res.redirect(`/brands/${updatedBrand._id}`);
        }
        
    );
});



//After "DELETE" return to SHOW(brands) page
router.delete('/:id', (req, res) => {
    const brandId = req.params.id;
    
    db.Brand.findByIdAndDelete(brandId, (error, deletedBrand) => {
        if (error) return console.log(error);
        res.redirect('/brands');
    });
});


//EXPORT to server.js
module.exports = router;