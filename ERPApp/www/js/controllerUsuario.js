angular.module('starter')
  .controller('usuarioController', function(
    $ionicPopup, $location, $state, $rootScope, $scope,
    conectaBanco, daoUsuario, tools) {
    var conexao = conectaBanco.conectar();
    $scope.dados = [];
    
    $scope.pesquisar = function() {
      $scope.dados = [];
      $scope.dados = daoUsuario.lista(conexao, "");
      $location.path('/listaUsuario');
    };

    $scope.alterar = function(id) {
      $rootScope.dado = daoUsuario.getObjeto(conexao, id);
      $location.path('/cadastroUsuario');
    };

    $scope.novo = function(id) {
      $rootScope.dado = daoUsuario.getBranco();
      $location.path('/cadastroUsuario');
    };

    $scope.salvar = function(dado) {
      var confirm = tools.msgConfirm("APP", "Deseja Salvar o Registro?");
      confirm.then(function(res) {
        if (res) {
          if (!dado.nome) {
            tools.msg("ERRO", "Nome é Obrigatório!");
          } else if (!dado.login) {
            tools.msg("ERRO", "Login é Obrigatório!");
          } else if (!dado.senha) {
            tools.msg("ERRO", "Senha é Obrigatória!");
          } else {
            var usuario = new Usuario();
            usuario.setId(dado.id);
            usuario.setNome(dado.nome);
            usuario.setLogin(dado.login);
            usuario.setSenha(dado.senha);
            daoUsuario.salvar(conexao, usuario);
            tools.msg("APP", "Dados Salvos!");
            $location.path('/menuUsuario');
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
          daoUsuario.excluir(conexao, id);
          $scope.pesquisar();
          tools.msg("APP", "Dados Excluídos");
        } else {
          tools.msg("APP", "Dados Não Excluídos");
        }
      });
    }

    conexao.close;


  });
