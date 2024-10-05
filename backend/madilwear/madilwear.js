const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const appp = express.json();
const parser = bodyParser.json();
const corss = cors({
    origin: 'http://localhost:3000' 
});


module.exports = {parser, corss, appp}

