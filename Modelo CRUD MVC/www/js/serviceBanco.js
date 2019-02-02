angular.module('starter')
  .service('conectaBanco', function($cordovaSQLite) {
    this.conectar = function() {
      var conexao = null;
      if (window.cordova) { // used in cell phones
        conexao = $cordovaSQLite.openDB({
          name: "bancoAPP.db"
        });
      } else { // used in web browsers
        conexao = window.openDatabase("bancoAPP.db", "1.0", "bancoAPP", -1);
      }
      this.criarTabelas(conexao);
      return conexao;
    }
    this.criarTabelas = function(conexao) {
      $cordovaSQLite.execute(conexao,
        "CREATE TABLE IF NOT EXISTS cliente (id integer primary key, nome text, sobrenome text)");
    };
  });
