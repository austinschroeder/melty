const express = require('express');
const app = express();
const PORT = 4000

app.get('/', (req, res) => {
    res.send('We have Cheese!')
})

app.listen(PORT, () => {
    console.log(`Connected at ${PORT}`)
})