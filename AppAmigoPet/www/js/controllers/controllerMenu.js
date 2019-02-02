angular.module('amigopet')
  .controller('menuController', function($scope, $rootScope, $state, daoUsuario, conectaBanco) {
    var conexao = conectaBanco.conectar();
    $scope.dados = [];

      $scope.logout = function() {
        $rootScope.usuario = {};
        $state.go('start')
      };

      $scope.pesquisar = function() {
        $scope.dados = [];
        $scope.dados = daoUsuario.lista(conexao, "");
      };

      conexao.close;

  });
