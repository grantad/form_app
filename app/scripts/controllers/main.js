'use strict';

angular.module('formAppApp')
   .controller('MainCtrl', function($scope) {
      $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
      $scope.addTodo = function() {
          $scope.todos.push($scope.todo);
          $scope.todo = '';
      };
   }
);
