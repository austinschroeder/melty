const express = require('express');
//Import METHOD_OVERRIDE//
const methodOverride = require('method-override');
//Import brandsController//
const brandsController = require('./controllers/brandsController')
//
const app = express();
const PORT = process.env.PORT || 4000;

//CONFIG//
app.set('view engine', 'ejs');

//MIDWARE// (allow access to request body, (parse request body))
app.use(express.urlencoded({ extended: false}));
//TIE IN CSS
app.use(express.static(__dirname + '/public'));

//Method Override//
app.use(methodOverride('_method'));

////CONTROLLERS////
//For all requests to /brands, send to brandsController
app.use('/brands', brandsController);

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//-----SPLASH(home) Route-----
app.get('/', (req, res) => {
    res.render('index.ejs');
});



// //-----INDEX(brands) Route-----
// app.get('/brands', (req, res) => {
//     res.render('brands/brandsIndex');
// });


// mongodb+srv://austin:1234@cluster0.3dh5o.mongodb.net/melty-plant-based?retryWrites=true&w=majority



app.listen(PORT, () => {
    console.log(`Connected at port: ${PORT}  YOU GOT THIS!`)
});



