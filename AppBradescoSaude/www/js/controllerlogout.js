angular.module('calculadoraAngular')
  // Controller para Calculo
  .controller('resultadoController', function($scope, $rootScope, $ionicPopup, $location, calculos, credencial) {
    $scope.dados = {};
    $scope.logout = function(valor) {
      // var login = credencial(validacao.usuario, validacao.senha);

      if (valor == 1) {
        $ionicPopup.alert({
          title: 'Atenção',
          template: 'logout'
        });
        $location.p('/login');
      }
    }
  });
