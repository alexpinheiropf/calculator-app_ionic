angular.module('starter')
  .controller('projetoController', function(
    $ionicPopup, $location, $state, $rootScope, $scope,
    conectaBanco, daoProjeto, tools) {
    var conexao = conectaBanco.conectar();
    $scope.dados = [];

    $scope.pesquisar = function() {
      $scope.dados = [];
      $scope.dados = daoProjeto.lista(conexao, "");
      $location.path('/listaProjeto');
    };

    $scope.alterar = function(id) {
      $rootScope.dado = daoProjeto.getObjeto(conexao, id);
      $location.path('/cadastroProjeto');
    };

    $scope.novo = function(id) {
      $rootScope.dado = daoProjeto.getBranco();
      $location.path('/cadastroProjeto');
    };

    $scope.salvar = function(dado) {
      var dadoVoto  = false;

      dadoVoto = dado.votos;
      

      if (dadoVoto == false){
        dadoVoto = "Não";
      }else{
        dadoVoto = "Sim";
      }
      var confirm = tools.msgConfirm("APP", "Deseja Salvar o Registro?");
      confirm.then(function(res) {
        if (res) {
          if (!dado.nome) {
            tools.msg("ERRO", "Nome é Obrigatório!");
          } else if (!dado.descricao) {
            tools.msg("ERRO", "Descrição é Obrigatória!");
          } else {
            var projeto = new Projeto();
            projeto.setId(dado.id);
            projeto.setNome(dado.nome);
            projeto.setDescricao(dado.descricao);
            projeto.setVotos(dadoVoto);
            daoProjeto.salvar(conexao, projeto);
            tools.msg("APP", "Dados Salvos!");
            tools.msg("APP", dadoVoto);
            $location.path('/menuProjeto');
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
          daoProjeto.excluir(conexao, id);
          $scope.pesquisar();
          tools.msg("APP", "Dados Excluídos");
        } else {
          tools.msg("APP", "Dados Não Excluídos");
        }
      });
    }

    conexao.close;


  });
