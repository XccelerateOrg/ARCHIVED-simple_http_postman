const express = require("express"),
      bodyParser = require('body-parser'),
      basicAuth = require('express-basic-auth'),
      app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(basicAuth({
    users: { 'admin': 'supersecret' },
    challenge: true,
    realm: 'My Application'
}));

app.get('/', function(req, res) {
    console.log(req.auth);
    res.sendFile(__dirname + '/index.html');
});

// ?name=test is query
app.get('/search', function(req, res) {
    res.send("Search Info" +
            "\nQuery: " + JSON.stringify(req.query) +
            "\nParams: " + JSON.stringify(req.params) +
            "\nBody: " + JSON.stringify(req.body));
});

// :id is param
app.get('/search/:id', function(req, res) {
    res.send("Search Info" +
            "\nQuery: " + JSON.stringify(req.query) +
            "\nParams: " + JSON.stringify(req.params) +
            "\nBody: " + JSON.stringify(req.body));
});

// {id: test} is body
app.post('/create', function(req, res) {
    res.send("Create Info" + 
            "\nQuery: " + JSON.stringify(req.query) +
            "\nParams: " + JSON.stringify(req.params) +
            "\nBody: " + JSON.stringify(req.body));
});

app.post('/create/:id', function(req, res) {
    res.send("Create Info" + 
            "\nQuery: " + JSON.stringify(req.query) +
            "\nParams: " + JSON.stringify(req.params) +
            "\nBody: " + JSON.stringify(req.body));
});

app.listen(5555);