'use strict';

var angular = require('angular');

angular.module('todoListApp')
.controller('mainCtrl', function($scope, $log, $interval, dataService){
   
  dataService.getTodos(function(response){
    var todos = response.data.todos;  
    $scope.todos = todos;
  });
  
  $scope.addTodo = function() {
    $scope.todos.unshift({name: "This is a new todo.",
                      completed: false}); // unshift means add to front of array
  };

  // Practice using $interval and $log
  $scope.seconds = 0;
  $scope.counter = function () {
      $scope.seconds += 1;
      $log.info($scope.seconds + ' have passed');
  }
  $interval($scope.counter, 1000, 10);
  
})