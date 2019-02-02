angular.module('amigopet')
  // Controller para verificar credenciais
  .controller('loginController', function($scope, $rootScope, $ionicPopup, $location, daoLogin) {
    $scope.dados = {};

    $scope.validar = function(dados) {
      if (!dados.login) {
        $ionicPopup.alert({
          title: 'ATENÇÂO!!!',
          template: 'Email ou CPF são Obrigatórios'
        });
      } else if (!dados.senha) {
        $ionicPopup.alert({
          title: 'ATENÇÂO!!!',
          template: 'Senha é Obrigatório'
        });
      } else {
        var mostraDados = daoLogin.comparaDados(dados.login, dados.senha);
        $rootScope.mostraDados = mostraDados;
        $location.path('/menu/promocoes');
      }
    }

  });
