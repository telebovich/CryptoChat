var express = require('express');
var ArticleProvider = require('./articleprovider-memory').ArticleProvider;
var app = module.exports = express.createServer();

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(require('stylus').middleware({ src: __dirname + '/public' }));
    app.use(app.router);
    app.use(express.static(__dirname + 'public'));
});

app.configure('development', function() {
    app.use(express.errorHandler());
});

app.configure('production', function() {
    app.use(express.errorHandler());
});

var articleProvider = new ArticleProvider();

app.get('/', function(req, res){
    //res.send('<html><head><title>Hello from node.js!</title><link href="/styles/style.css" rel="stylesheet" type="text/css" /></head><body><h1>Hello from node.js!</h1></body></html>');
    articleProvider.findAll(function(error, docs) {
        res.send(docs);
    });    
});
app.listen(process.env.PORT);
