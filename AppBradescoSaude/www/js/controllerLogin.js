angular.module('calculadoraAngular')
  // Controller para login
  .controller('loginController', function($scope, $rootScope, $ionicPopup, $location, credencial) {
    $scope.executar = function(validacao) {
      if (!validacao.usuario) {
        $ionicPopup.alert({
          title: 'Atenção',
          template: 'O E-mail ou CPF é obrigatório'
        });
      } else if (!validacao.senha) {
        $ionicPopup.alert({
          title: 'Atenção',
          template: 'A Senha é obrigatória'
        });
      } else {
        var login = credencial.comparaDados(validacao.usuario, validacao.senha);
        $rootScope.login = login;
        $location.path('/menu');
      }
    }

  });
