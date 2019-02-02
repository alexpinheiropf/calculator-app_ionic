angular.module('amigopet')
  // Controller para login
  .controller('loginController', function($scope, $rootScope, $ionicPopup, daoLogin,
                                          tools, conectaBanco, daoUsuario, $location) {
    var conexao = conectaBanco.conectar();
    $scope.dados = [];

    $scope.validar = function(dados) {

      if (!dados.celular) {
        tools.msg("ATENÇÃO", "Numero do Celular é Obrigatório!");
      } else if (!dados.senha) {
        tools.msg("ATENÇÃO", "Senha é Obrigatória!");
      } else {
        daoLogin.validar(conexao, dados.celular, dados.senha);
      }
    }

    $scope.novo = function(id) {
      $rootScope.dado = daoUsuario.getBranco();
      $location.path('/cadastroUsuario');
    };

  });
