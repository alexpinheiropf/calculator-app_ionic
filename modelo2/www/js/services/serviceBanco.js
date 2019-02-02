angular.module('amigopet')
  .service('conectaBanco', function($cordovaSQLite) {
    this.conectar = function() {
      var conexao = null;
      if (window.cordova) { // used in cell phones
        conexao = $cordovaSQLite.openDB({
          name: "db_amigopet.db"
        });
      } else { // used in web browsers
        conexao = window.openDatabase("db_amigopet.db", "1.0", "db_amigopet", -1);
      }
      this.criarTabelas(conexao);
      return conexao;
    }
    this.criarTabelas = function(conexao) {
      $cordovaSQLite.execute(conexao,
        "CREATE TABLE IF NOT EXISTS Usuario (id integer primary key, nome text, login text, senha text)");
        
    };
  });
