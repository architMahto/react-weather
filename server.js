var express    = require('express');
var logger     = require('morgan');
var bodyParser = require('body-parser');
var cors       = require('cors');
var path       = require('path');

// Create express app
var app        = express();

// middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(path.join(__dirname + '/public')));

app.listen(3000, function() {
    console.log("Server running on port:", 3000);
});
