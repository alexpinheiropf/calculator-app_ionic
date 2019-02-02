angular.module('starter')
  .service('daoCliente', function($cordovaSQLite, tools) {
    this.salvar = function(conexao, cliente) {
      if (cliente.getId() != 0) {
        var sql = "UPDATE cliente set nome = ?, sobrenome = ? where id = ?";
        $cordovaSQLite.execute(conexao, sql, [cliente.getNome(), cliente.getSobrenome(), cliente.getId()]).then(function(res) {
          console.log("UPDATE ID -> " + cliente.getId());
        }, function(err) {
          console.error(err);
        });
      } else {
        var sql = "INSERT INTO cliente (nome, sobrenome) VALUES ( ? , ? )";
        $cordovaSQLite.execute(conexao, sql, [cliente.getNome(), cliente.getSobrenome()]).then(function(res) {
          console.log("INSERT ID -> " + res.insertId);
        }, function(err) {
          console.error(err);
        });
      }
    };

    this.excluir = function(conexao, id) {
      if (id != 0) {
        var sql = "DELETE FROM cliente WHERE ID = ?";
        $cordovaSQLite.execute(conexao, sql, [id]).then(function(res) {
          console.log("Delete ID -> " + id);
        }, function(err) {
          console.error(err);
        });
      }
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

    this.getObjeto = function(conexao, parametro) {
      var cliente = new Cliente();
      var sql = "SELECT * FROM cliente where id = ?";
      $cordovaSQLite.execute(conexao, sql, [parametro]).then(function(res) {
        if (res.rows.length > 0) {
          var nregistros = 0;
          console.log("SELECTED -> " + res.rows.item(nregistros).id +
            " " + res.rows.item(nregistros).nome + " " +
            res.rows.item(nregistros).sobrenome);
          cliente.setId(res.rows[nregistros].id);
          cliente.setNome(res.rows[nregistros].nome);
          cliente.setSobrenome(res.rows[nregistros].sobrenome);
        }
      }, function(err) {
        console.error(err);
      });
      return cliente;
    };


    this.getBranco = function(conexao, parametro) {
      var cliente = new Cliente();
      cliente.setId(0);
      cliente.setNome("");
      cliente.setSobrenome("");
      return cliente;
    };

  });
