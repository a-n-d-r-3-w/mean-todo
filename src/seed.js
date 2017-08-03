'use strict';

var Todo = require('./models/todo.js');

var todos = [
   'Item 1',
   'Item 2',
   'Item 3'
];

// Initialize DB data
todos.forEach(function (todo, index) {
    Todo.find({'name': todo}, function (err, todos) {
       if (!err && !todos.length) {
           Todo.create({completed: false, name: todo});
       }
    });
});