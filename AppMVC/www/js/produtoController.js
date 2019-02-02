angular.module('starter')
  .controller('produtoController', function($state, $scope, conectaBanco, daoProduto, $location) {
    var conexao = conectaBanco.conectar();

    $scope.pesquisar = function() {
      $scope.dados = [];
      $scope.dados = daoProduto.lista(conexao, "");
    };
    $scope.salvar = function(dados) {
      var produto = new Produto(0, dados.txtDescricao, dados.txtEstoqueMinimo);
      $scope.dados = daoProduto.salvar(conexao, produto);
      $location.path('/menuProduto');
    };

    $scope.deletar = function(id) {
      daoProduto.excluir(conexao, id);
      $scope.pesquisar();
      $location.path('/menuProduto');
    };
    //tools

    $scope.acessa = function(url){
      $state.go(url, {reload: true} );
    }
    //fim de tools

    $scope.pesquisar();
    conexao.close;


  });
