var express =  require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: 'Fart',
    completed: false
}, {
    id: 2,
    description: 'Kiss wife',
    completed: false
},{
    id: 3,
    description: 'Make sweet app',
    completed: true
}];

//var middleware = require('./middleware');
//
//app.use(middleware.logger);
//
//app.get('/about', middleware.requireAuth, function(req, res){
//    res.send('About Us!');
//})
app.get('/', function(req, res){
    res.send('Todo API Root');
});

app.get('/todos', function(req, res){
    res.json(todos); 
});

app.get('/todos/:id', function(req, res){
    var todoId = parseInt(req.params.id, 10);
    var matchedTodo;
    
    todos.forEach(function(todo){
        if(todoId === todo.id){
            matchedTodo = todo;
        }    
    });
    
    if(matchedTodo){
        res.json(matchedTodo);
    } else {
        res.status(404).send();
    }
});

//app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log('Express server listening on port: ' + PORT);
});