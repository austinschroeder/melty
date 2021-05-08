const express = require('express');
//Import brandsController
const brandsController = require('./controllers/brandsController')
const app = express();
const PORT = 4000;

//CONFIG//
app.set('view engine', 'ejs');

//MIDWARE// (allow access to request body, (parse request body))
app.use(express.urlencoded({ extended: false}));

//For all requests to /brands, send to brandsController
app.use('/brands', brandsController);


//-----SPLASH(home) Route-----
app.get('/', (req, res) => {
    res.render('index.ejs');
});



// //-----INDEX(brands) Route-----
// app.get('/brands', (req, res) => {
//     res.render('brands/brandsIndex');
// });











app.listen(PORT, () => {
    console.log(`Connected at port: ${PORT}  YOU GOT THIS!`)
});



