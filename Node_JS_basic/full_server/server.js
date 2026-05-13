const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 1245;

router(app);

app.listen(port);

module.exports = app;
