const express = require('express');
const expressHandlebars = require('express-handlebars-sections');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/db.js');

const app = express();

//Routes
app.get('/', (req, res) => {
    return res.send("Test");
})

//Test DB Connection
db.authenticate()
    .then(() => console.log('Db connection established'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`App is listening on port ${PORT}`));