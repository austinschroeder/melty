const express = require('express');
const app = express();
const PORT = 4000;


app.set('view engine', 'ejs');





//-----SPLASH(home) Route-----
app.get('/', (req, res) => {
    res.render('index.ejs');
});



//-----INDEX(brands) Route-----
app.get('/brands', (req, res) => {
    res.render('brands/brandsIndex');
})









app.listen(PORT, () => {
    console.log(`Connected at port: ${PORT}  YOU GOT THIS!`)
});



