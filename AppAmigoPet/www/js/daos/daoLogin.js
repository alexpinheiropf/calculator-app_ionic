angular.module('amigopet')
  .service('daoLogin', function($cordovaSQLite, $location, tools) {
    this.validar = function (conexao, celular, senha){
      var sql = "SELECT * FROM usuario where celular = ? AND senha = ?";

      $cordovaSQLite.execute(conexao, sql, [celular, senha]).then(function(res) {
        if (res.rows.length > 0) {
          $location.path("/menu/promocoes")
        } else{
          tools.msg("Atenção", "Usuário ou senha Inválidos");
        }
    });
    };
  });
