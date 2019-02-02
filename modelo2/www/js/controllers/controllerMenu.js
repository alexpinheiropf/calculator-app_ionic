angular.module('amigopet')

// Controller para logout do menu SAIR
.controller('menuController', function($scope, $rootScope, $state) {

  $rootScope.usuario = {};

  $scope.logout = function() {
    $rootScope.usuario = {};
    $state.go('menu.start')
  };

})
