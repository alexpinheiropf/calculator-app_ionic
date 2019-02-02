angular.module('starter')
  .controller('usuarioController', function($state, $scope, conectaBanco, daoUsuario, $location) {
    var conexao = conectaBanco.conectar();

    $scope.pesquisar = function() {
      $scope.dados = [];
      $scope.dados = daoUsuario.lista(conexao, "");
    };
    $scope.salvar = function(dados) {
      var usuario = new Usuario(0, dados.txtLogin, dados.txtSenha);
      $scope.dados = daoUsuario.salvar(conexao, usuario);
      $location.path('/menuUsuario');
    };

    $scope.deletar = function(id) {
      daoUsuario.excluir(conexao, id);
      $scope.pesquisar();
      $location.path('/menuUsuario');
    };
    //tools

    $scope.acessa = function(url){
      $state.go(url, {reload: true} );
    }
    //fim de tools

    $scope.pesquisar();
    conexao.close;


  });
