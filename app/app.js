const express = require('express');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const app = express();

app.use('/api', require('./routes/api'));
app.use(require('./routes/web'));


module.exports = app;