(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.title = 'Zombie Pets';
  }]);

})();

