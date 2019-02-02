angular.module('starter')
  .service('daoLogin', function($cordovaSQLite, $location, tools) {
    this.validar = function (conexao, login, senha){
      var sql = "SELECT * FROM usuario where login = ? AND senha = ?";

      $cordovaSQLite.execute(conexao, sql, [login, senha]).then(function(res) {
        if (res.rows.length > 0) {
          $location.path("/menu")
        } else{
          tools.msg("Atenção", "Usuário ou senha Inválidos");
        }
    });
    };
  });
