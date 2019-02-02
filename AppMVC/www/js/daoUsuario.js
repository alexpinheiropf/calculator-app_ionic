angular.module('starter')
  .service('daoUsuario', function($cordovaSQLite, $ionicPopup) {
    this.salvar = function(conexao, usuario) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'APP',
        template: 'Deseja Salvar o Registro?'
      });
      confirmPopup.then(function(res) {
        if (res) {
          if (!usuario.login) {
            $ionicPopup.alert({
              title: 'Atenção',
              template: '<b>Usuário é obrigatório </b>'
            });
          } else if (!usuario.senha) {
            $ionicPopup.alert({
              title: 'Atenção',
              template: '<b>Senha é obrigatória </b>'
            });
          } else {

            if (usuario.id != 0) {
              var sql = "UPDATE usuario set login = ?, senha = ? where id = ?";
              $cordovaSQLite.execute(conexao, sql, [usuario.login, usuario.senha, usuario.id]).then(function(res) {
                console.log("UPDATE ID -> " + usuario.id);
              }, function(err) {
                console.error(err);
              });
            } else {
              var sql = "INSERT INTO usuario (login, senha) VALUES ( ? , ? )";
              $cordovaSQLite.execute(conexao, sql, [usuario.login, usuario.senha]).then(function(res) {
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
            var sql = "DELETE FROM usuario WHERE ID = ?";
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
      var sql = "SELECT * FROM usuario where login like ? or senha like ? order by login ASC";
      $cordovaSQLite.execute(conexao, sql, [parametro, parametro]).then(function(res) {
        if (res.rows.length > 0) {
          var nregistros = 0;
          var nregistrosFinal = res.rows.length - 1;
          while (nregistros <= nregistrosFinal) {
            console.log("SELECTED -> "
                  + res.rows.item(nregistros).id +
              " " + res.rows.item(nregistros).login +
              " " + res.rows.item(nregistros).senha);
            resultado.push({
              id: res.rows[nregistros].id,
              login: res.rows[nregistros].login,
              senha: res.rows[nregistros].senha
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
      var sql = "SELECT * FROM usuario where id = ? order by login ASC";
      $cordovaSQLite.execute(conexao, sql, [parametro]).then(function(res) {
        if (res.rows.length > 0) {
          var nregistros = 0;
          var nregistrosFinal = res.rows.length - 1;
          while (nregistros <= nregistrosFinal) {
            console.log("SELECTED -> "
                  + res.rows.item(nregistros).id +
              " " + res.rows.item(nregistros).login +
              " " + res.rows.item(nregistros).senha);
            resultado.push({
              id: res.rows[nregistros].id,
              login: res.rows[nregistros].login,
              senha: res.rows[nregistros].senha
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
