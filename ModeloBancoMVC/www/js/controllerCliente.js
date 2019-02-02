angular.module('starter')
  .controller('clienteController', function($state, $scope, conectaBanco, daoCliente, $location) {
    var conexao = conectaBanco.conectar();

    $scope.pesquisar = function() {
      $scope.dados = [];
      $scope.dados = daoCliente.lista(conexao, "");
    };
    $scope.salvar = function(dados) {
      var cliente = new Cliente(0, dados.txtNome, dados.txtSobrenome);
      $scope.dados = daoCliente.salvar(conexao, cliente);
      $location.path('/menuCliente');
    };

    $scope.deletar = function(id) {
      daoCliente.excluir(conexao, id);
      $scope.pesquisar();
      $location.path('/menuCliente');
    };
    //tools

    $scope.acessa = function(url){
      $state.go(url, {reload: true} );
    }
    //fim de tools

    $scope.pesquisar();
    conexao.close;


  });
