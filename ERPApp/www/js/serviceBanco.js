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
        "CREATE TABLE IF NOT EXISTS Usuario (id integer primary key, nome text, login text, senha text)");

      $cordovaSQLite.execute(conexao,
        "CREATE TABLE IF NOT EXISTS projeto (id integer primary key, nome text, descricao text, votos text)");

      $cordovaSQLite.execute(conexao,
        "CREATE TABLE IF NOT EXISTS instituicao (id integer primary key, titulo text, texto text)");
    };
  });
