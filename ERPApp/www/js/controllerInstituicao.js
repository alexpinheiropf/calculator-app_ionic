angular.module('starter')
  .controller('instituicaoController', function(
    $ionicPopup, $location, $state, $rootScope, $scope,
    conectaBanco, daoInstituicao, tools) {
    var conexao = conectaBanco.conectar();
    $scope.dados = [];

    $scope.pesquisar = function() {
      $scope.dados = [];
      $scope.dados = daoInstituicao.lista(conexao, "");
      $location.path('/listaInstituicao');
    };

    $scope.alterar = function(id) {
      $rootScope.dado = daoInstituicao.getObjeto(conexao, id);
      $location.path('/cadastroInstituicao');
    };

    $scope.novo = function(id) {
      $rootScope.dado = daoInstituicao.getBranco();
      $location.path('/cadastroInstituicao');
    };

    $scope.salvar = function(dado) {
      var confirm = tools.msgConfirm("APP", "Deseja Salvar o Registro?");
      confirm.then(function(res) {
        if (res) {
          if (!dado.titulo) {
            tools.msg("ERRO", "Titulo é Obrigatório!");
          } else if (!dado.texto) {
            tools.msg("ERRO", "Texto é Obrigatório!");
          } else {
            var instituicao = new Instituicao();
            instituicao.setId(dado.id);
            instituicao.setTitulo(dado.titulo);
            instituicao.setTexto(dado.texto);
            daoInstituicao.salvar(conexao, instituicao);
            tools.msg("APP", "Dados Salvos!");
            $location.path('/menuInstituicao');
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
          daoInstituicao.excluir(conexao, id);
          $scope.pesquisar();
          tools.msg("APP", "Dados Excluídos");
        } else {
          tools.msg("APP", "Dados Não Excluídos");
        }
      });
    }

    conexao.close;


  });
