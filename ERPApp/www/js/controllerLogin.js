angular.module('starter')
  // Controller para login
  .controller('loginController', function($scope, $rootScope, $ionicPopup, daoLogin, tools, conectaBanco) {
    var conexao = conectaBanco.conectar();
    $scope.dados = [];

    $scope.validar = function(dados) {

      if (!dados.login) {
        tools.msg("ATENÇÃO", "Usuário é Obrigatório!");
      } else if (!dados.senha) {
        tools.msg("ATENÇÃO", "Senha é Obrigatória!");
      } else {
        daoLogin.validar(conexao, dados.login, dados.senha);
      }
    }

  });
