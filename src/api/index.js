// API module
'use strict';

var express = require('express');

// Load todo mongoose model
var Todo = require('../models/todo');

// Load mock todos
//var todos = require('../../mock/todos.json');

// Create a router for the API
var router = express.Router();

// Mount API routes to the router

// Route for getting all todos
router.get('/todos', function(req, res) {
    Todo.find({/*criteria*/}, function (err, todos) {
        if (err) {
            return res.status(500).json({message: err.message});
        }
        res.json({todos: todos});
    });
    
    // res.send('These are the todos.'); // Content-Type: text/html
});

// Route for creating new todos
router.post('/todos', function (req, res) {
    var todo = req.body;
    Todo.create(todo, function(err, todo) {
        if (err) {
            return res.status(500).json({message: err.message});
        }
        res.json({todo: todo, message: 'Todo created'});
    });
});

// Route for editing a todo
router.put('/todos/:id', function (req, res) {
    var id = req.params.id;
    var todo = req.body;
    
    if (todo && todo._id !== id) {
        return res.status(500).json({message: 'IDs don\'t match'});
    }
    
    Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) { // "new" means return the updated data, not the previous data.
        if (err) {
            return res.status(500).json({message: err.message});
        }
        res.json({todo: todo, message: 'Todo edited'});
    });
});

// TODO: Add DELETE route to delete entries

// Export module
module.exports = router;