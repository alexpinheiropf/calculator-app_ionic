angular.module('starter')
  .service('daoInstituicao', function($cordovaSQLite, tools) {
    this.salvar = function(conexao, instituicao) {
      if (instituicao.getId() != 0) {
        var sql = "UPDATE instituicao set titulo = ?, texto = ? where id = ?";
        $cordovaSQLite.execute(conexao, sql, [instituicao.getTitulo(), instituicao.getTexto(),
          instituicao.getId()]).then(function(res) {
          console.log("UPDATE ID -> " + instituicao.getId());
        }, function(err) {
          console.error(err);
        });
      } else {
        var sql = "INSERT INTO instituicao (titulo, texto) VALUES ( ? , ? )";
        $cordovaSQLite.execute(conexao, sql, [instituicao.getTitulo(), instituicao.getTexto()]).then(function(res) {
          console.log("INSERT ID -> " + res.insertId);
        }, function(err) {
          console.error(err);
        });
      }
    };

    this.excluir = function(conexao, id) {
      if (id != 0) {
        var sql = "DELETE FROM instituicao WHERE ID = ?";
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
      var sql = "SELECT * FROM instituicao where titulo like ? or texto like ? order by titulo ASC";
      $cordovaSQLite.execute(conexao, sql, [parametro, parametro]).then(function(res) {
        if (res.rows.length > 0) {
          var nregistros = 0;
          var nregistrosFinal = res.rows.length - 1;
          while (nregistros <= nregistrosFinal) {
            console.log("SELECTED -> "
                  + res.rows.item(nregistros).id + " "
                  + res.rows.item(nregistros).titulo + " "
                  + res.rows.item(nregistros).texto);
            resultado.push({
              id: res.rows[nregistros].id,
              titulo: res.rows[nregistros].titulo,
              texto: res.rows[nregistros].texto
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
      var instituicao = new Instituicao();
      var sql = "SELECT * FROM instituicao where id = ?";
      $cordovaSQLite.execute(conexao, sql, [parametro]).then(function(res) {
        if (res.rows.length > 0) {
          var nregistros = 0;
          console.log("SELECTED -> "
                + res.rows.item(nregistros).id + " "
                + res.rows.item(nregistros).titulo + " "
                + res.rows.item(nregistros).texto);
          instituicao.setId(res.rows[nregistros].id);
          instituicao.setTitulo(res.rows[nregistros].titulo);
          instituicao.setTexto(res.rows[nregistros].texto);
        }
      }, function(err) {
        console.error(err);
      });
      return instituicao;
    };


    this.getBranco = function(conexao, parametro) {
      var instituicao = new Instituicao();
      instituicao.setId(0);
      instituicao.setTitulo("");
      instituicao.setTexto("");
      return instituicao;
    };

  });
