var express =  require('express');
var app = express();
var port = 3000;

var middleware = {
    requireAuth: function(req, res, next){
        console.log('private route hit!');
        next();
    },
    logger: function(req, res, next){
        console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuth, function(req, res){
    res.send('About Us');
})

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
    console.log('Express server listening on port: ' + port);
});