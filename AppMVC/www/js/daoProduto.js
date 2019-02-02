angular.module('starter')
  .service('daoProduto', function($cordovaSQLite, $ionicPopup) {
    this.salvar = function(conexao, produto) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'APP',
        template: 'Deseja Salvar o Registro?'
      });
      confirmPopup.then(function(res) {
        if (res) {
          if (!produto.descricao) {
            $ionicPopup.alert({
              title: 'Atenção',
              template: '<b>Descrição é obrigatória!!! </b>'
            });
          } else if (!produto.estoqueMinimo) {
            $ionicPopup.alert({
              title: 'Atenção',
              template: '<b>Estoque Minimo é obrigatório </b>'
            });
          } else {

            if (produto.id != 0) {
              var sql = "UPDATE produto set descricao = ?, estoqueMinimo = ? where id = ?";
              $cordovaSQLite.execute(conexao, sql, [produto.descricao, produto.estoqueMinimo, produto.id]).then(function(res) {
                console.log("UPDATE ID -> " + produto.id);
              }, function(err) {
                console.error(err);
              });
            } else {
              var sql = "INSERT INTO produto (descricao, estoqueMinimo) VALUES ( ? , ? )";
              $cordovaSQLite.execute(conexao, sql, [produto.descricao, produto.estoqueMinimo]).then(function(res) {
                console.log("INSERT ID -> " + res.insertId);
              }, function(err) {
                console.error(err);
              });
            }
          }
        } else {
          $ionicPopup.alert({
            title: 'Atenção',
            template: '<b>Os Dados Não Salvos</b>'
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
            var sql = "DELETE FROM produto WHERE ID = ?";
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
      var sql = "SELECT * FROM produto where descricao like ? or estoqueMinimo like ? order by descricao ASC";
      $cordovaSQLite.execute(conexao, sql, [parametro, parametro]).then(function(res) {
        if (res.rows.length > 0) {
          var nregistros = 0;
          var nregistrosFinal = res.rows.length - 1;
          while (nregistros <= nregistrosFinal) {
            console.log("SELECTED -> "
                  + res.rows.item(nregistros).id +
              " " + res.rows.item(nregistros).descricao +
              " " + res.rows.item(nregistros).estoqueMinimo);
            resultado.push({
              id: res.rows[nregistros].id,
              descricao: res.rows[nregistros].descricao,
              estoqueMinimo: res.rows[nregistros].estoqueMinimo
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
      var sql = "SELECT * FROM produto where id = ? order by nome ASC";
      $cordovaSQLite.execute(conexao, sql, [parametro]).then(function(res) {
        if (res.rows.length > 0) {
          var nregistros = 0;
          var nregistrosFinal = res.rows.length - 1;
          while (nregistros <= nregistrosFinal) {
            console.log("SELECTED -> "
                  + res.rows.item(nregistros).id +
              " " + res.rows.item(nregistros).descricao +
              " " + res.rows.item(nregistros).estoqueMinimo);
            resultado.push({
              id: res.rows[nregistros].id,
              descricao: res.rows[nregistros].descricao,
              estoqueMinimo: res.rows[nregistros].estoqueMinimo
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
