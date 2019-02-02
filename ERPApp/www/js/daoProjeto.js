angular.module('starter')
  .service('daoProjeto', function($cordovaSQLite, tools) {
    this.salvar = function(conexao, projeto) {
      if (projeto.getId() != 0) {
        var sql = "UPDATE projeto set nome = ?, descricao = ?, votos = ? where id = ?";
        $cordovaSQLite.execute(conexao, sql, [projeto.getNome(), projeto.getDescricao(),
          projeto.getVotos(), projeto.getId()]).then(function(res) {
          console.log("UPDATE ID -> " + projeto.getId());
        }, function(err) {
          console.error(err);
        });
      } else {
        var sql = "INSERT INTO projeto (nome, descricao, votos) VALUES ( ? , ?, ? )";
        $cordovaSQLite.execute(conexao, sql, [projeto.getNome(), projeto.getDescricao(),
          projeto.getVotos()]).then(function(res) {
          console.log("INSERT ID -> " + res.insertId);
        }, function(err) {
          console.error(err);
        });
      }
    };

    this.excluir = function(conexao, id) {
      if (id != 0) {
        var sql = "DELETE FROM projeto WHERE ID = ?";
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
      var sql = "SELECT * FROM projeto where nome like ? or descricao like ? order by nome ASC";
      $cordovaSQLite.execute(conexao, sql, [parametro, parametro]).then(function(res) {
        if (res.rows.length > 0) {
          var nregistros = 0;
          var nregistrosFinal = res.rows.length - 1;
          while (nregistros <= nregistrosFinal) {
            console.log("SELECTED -> "
                  + res.rows.item(nregistros).id + " "
                  + res.rows.item(nregistros).nome + " "
                  + res.rows.item(nregistros).descricao + " "
                  + res.rows.item(nregistros).votos);
            resultado.push({
              id: res.rows[nregistros].id,
              nome: res.rows[nregistros].nome,
              descricao: res.rows[nregistros].descricao,
              votos: res.rows[nregistros].votos
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
      var projeto = new Projeto();
      var sql = "SELECT * FROM projeto where id = ?";
      $cordovaSQLite.execute(conexao, sql, [parametro]).then(function(res) {
        if (res.rows.length > 0) {
          var nregistros = 0;
          console.log("SELECTED -> "
                + res.rows.item(nregistros).id + " "
                + res.rows.item(nregistros).nome + " "
                + res.rows.item(nregistros).descricao + " "
                + res.rows.item(nregistros).votos);

          projeto.setId(res.rows[nregistros].id);
          projeto.setNome(res.rows[nregistros].nome);
          projeto.setDescricao(res.rows[nregistros].descricao);
          projeto.setVotos(res.rows[nregistros].votos);
        }
      }, function(err) {
        console.error(err);
      });
      return projeto;
    };


    this.getBranco = function(conexao, parametro) {
      var projeto = new Projeto();
      projeto.setId(0);
      projeto.setNome("");
      projeto.setDescricao("");
      projeto.setVotos("");
      return projeto;
    };

  });
