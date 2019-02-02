angular.module('calculadoraAngular')
  // Controller para Calculo
  .controller('menuController', function($scope, $rootScope, $ionicPopup, $location, calculos, credencial) {
    $scope.calcular = function() {
      $location.path('/calcular');
    }

    $scope.logout = function(valor) {
      // var login = credencial(validacao.usuario, validacao.senha);

      if (valor == 1) {
        $ionicPopup.alert({
          title: 'Atenção',
          template: 'logout'
        });
        $location.path('/login');
      }
    }

  });
