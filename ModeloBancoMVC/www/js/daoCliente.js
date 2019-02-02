angular.module('starter')
  .service('daoCliente', function($cordovaSQLite, $ionicPopup) {
    this.salvar = function(conexao, cliente) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'APP',
        template: 'Deseja Salvar o Registro?'
      });
      confirmPopup.then(function(res) {
        if (res) {
          if (!cliente.nome) {
            $ionicPopup.alert({
              title: 'Erro',
              template: '<b>Nome é obrigatório </b>'
            });
          } else if (!cliente.sobrenome) {
            $ionicPopup.alert({
              title: 'Erro',
              template: '<b>Sobrenome é obrigatório </b>'
            });
          } else {

            if (cliente.id != 0) {
              var sql = "UPDATE cliente set nome = ?, sobrenome = ? where id = ?";
              $cordovaSQLite.execute(conexao, sql, [cliente.nome, cliente.sobrenome, cliente.id]).then(function(res) {
                console.log("UPDATE ID -> " + cliente.id);
              }, function(err) {
                console.error(err);
              });
            } else {
              var sql = "INSERT INTO cliente (nome, sobrenome) VALUES ( ? , ? )";
              $cordovaSQLite.execute(conexao, sql, [cliente.nome, cliente.sobrenome]).then(function(res) {
                console.log("INSERT ID -> " + res.insertId);
              }, function(err) {
                console.error(err);
              });
            }
          }
        } else {
          $ionicPopup.alert({
            title: 'APP',
            template: '<b>Dados Não Salvos</b>'
          });
        }
      });
    };

    this.excluir = function(conexao, id) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'APP',
        template: 'Deseja Excluir o Registro?'
      });
      confirmPopup.then(function(res) {
        if (res) {
          if (id != 0) {
            var sql = "DELETE FROM cliente WHERE ID = ?";
            $cordovaSQLite.execute(conexao, sql, [id]).then(function(res) {
              console.log("Delete ID -> " + id);
            }, function(err) {
              console.error(err);
            });
            $ionicPopup.alert({
              title: 'APP',
              template: '<b>Dados Excluídos com Sucesso!</b>'
            });
          }
        } else {
          $ionicPopup.alert({
            title: 'APP',
            template: '<b>Dados Não Excluídos</b>'
          });
        }
      });
    };

    this.lista = function(conexao, parametro) {
      var resultado = [];
      var parametro = "%" + parametro + "%";
      var sql = "SELECT * FROM cliente where nome like ? or sobrenome like ? order by nome ASC";
      $cordovaSQLite.execute(conexao, sql, [parametro, parametro]).then(function(res) {
        if (res.rows.length > 0) {
          var nregistros = 0;
          var nregistrosFinal = res.rows.length - 1;
          while (nregistros <= nregistrosFinal) {
            console.log("SELECTED -> " + res.rows.item(nregistros).id +
              " " + res.rows.item(nregistros).nome + " " +
              res.rows.item(nregistros).sobrenome);
            resultado.push({
              id: res.rows[nregistros].id,
              nome: res.rows[nregistros].nome,
              sobrenome: res.rows[nregistros].sobrenome
            });
            nregistros++;
          }

        }
      }, function(err) {
        console.error(err);
      });
      return resultado;
    };

    this.objeto = function(conexao,parametro) {
      var resultado = [];
      var sql = "SELECT * FROM cliente where id = ? order by nome ASC";
      $cordovaSQLite.execute(conexao, sql, [parametro]).then(function(res) {
        if (res.rows.length > 0) {
          var nregistros = 0;
          var nregistrosFinal = res.rows.length - 1;
          while (nregistros <= nregistrosFinal) {
            console.log("SELECTED -> " + res.rows.item(nregistros).id +
              " " + res.rows.item(nregistros).nome + " " +
              res.rows.item(nregistros).sobrenome);
            resultado.push({
              id: res.rows[nregistros].id,
              nome: res.rows[nregistros].nome,
              sobrenome: res.rows[nregistros].sobrenome
            });
            nregistros++;
          }

        }
      }, function(err) {
        console.error(err);
      });
      return resultado;
    };

  });
