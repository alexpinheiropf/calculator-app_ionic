angular.module('starter')
  .controller('clienteController', function(
    $ionicPopup, $location, $state, $rootScope, $scope,
    conectaBanco, daoCliente, tools) {
    var conexao = conectaBanco.conectar();
    $scope.dados = [];

    $scope.pesquisar = function() {
      $scope.dados = [];
      $scope.dados = daoCliente.lista(conexao, "");
      $location.path('/listaCliente');
    };

    $scope.alterar = function(id) {
      $rootScope.dado = daoCliente.getObjeto(conexao, id);
      $location.path('/cadastroCliente');
    };

    $scope.novo = function(id) {
      $rootScope.dado = daoCliente.getBranco();
      $location.path('/cadastroCliente');
    };

    $scope.salvar = function(dado) {
      var confirm = tools.msgConfirm("APP", "Deseja Salvar o Registro?");
      confirm.then(function(res) {
        if (res) {
          if (!dado.nome) {
            tools.msg("ERRO", "Nome é Obrigatório!");
          } else if (!dado.sobrenome) {
            tools.msg("ERRO", "Sobrenome é Obrigatório!");
          } else {
            var cliente = new Cliente();
            cliente.setId(dado.id);
            cliente.setNome(dado.nome);
            cliente.setSobrenome(dado.sobrenome);
            daoCliente.salvar(conexao, cliente);
            tools.msg("APP", "Dados Salvos!");
            $location.path('/menuCliente');
          }
        } else {
          tools.msg("APP", "Dados Não Salvos!");
        }
      });
    };

    $scope.deletar = function(id) {
      var confirm = tools.msgConfirm("APP", "Deseja Excluir o Registro?");
      confirm.then(function(res) {
        if (res) {
          daoCliente.excluir(conexao, id);
          $scope.pesquisar();
          tools.msg("APP", "Dados Excluídos");
        } else {
          tools.msg("APP", "Dados Não Excluídos");
        }
      });
    }

    conexao.close;


  });
