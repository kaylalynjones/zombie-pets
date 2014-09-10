(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope', function($scope){

    $scope.title = 'Zombie Pets';
    $scope.weapon = {};
    $scope.weapons = [];
    $scope.pet = {
      isZombie: false,
      health:100
    };
    $scope.pets = [];
    //player1 player2
    $scope.player1 = null;
    $scope.player2 = null;

    $scope.toggleWeapon = function(){
      $scope.hideWeapon = !!!$scope.hideWeapon;
    };

    $scope.togglePet = function(){
      $scope.hidePet = !!!$scope.hidePet;
    };

    $scope.addWeapon = function(){
      $scope.weapons.push($scope.weapon);
      $scope.weapon = {};
      $('#name').focus();
    };

    $scope.addPet = function(){
      var index = $scope.pet.weapon * 1;
      $scope.pet.weapon = $scope.weapons[index];
      $scope.pets.push($scope.pet);
      $scope.pet = {
        isZombie: false,
        health:100
      };
    };

    $scope.setPlayer = function(num){
      $scope['player' + num] = this.p;
    };

    $scope.fight = function(){
      var i = Math.floor(Math.random()*2 +1),
          petX = $scope['player' + i],
          petY = $scope['player' + (i === 1 ? 2 : 1)];
      attack(petX, petY);
      attack(petY, petX);
    };

    function attack(p1,p2){
      var max, min;

      if (p1.health < 0) {
        max = 3;
        min = 0;
      }
      else {
        max = p1.weapon.damage;
        min = 0;
      }

      var damage = Math.floor(Math.random() * (max - min + 1) + min);

      p2.health -= damage;

      if (p2.health < 0) {
        p2.isZombie = true;
      }
    }
  }]);

})();

