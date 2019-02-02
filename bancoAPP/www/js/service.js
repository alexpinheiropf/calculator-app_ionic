angular.module('starter')
  .service('conectaBanco', function($cordovaSQLite) {
    this.conectar = function() {
      var db = null;
      if (window.cordova) {
        // used in cell phones
        db = $cordovaSQLite.openDB({
          name: "bancoAPP.db"
        });
      } else {
        // used in web browsers
        db = window.openDatabase("bancoAPP.db", "1.0", "bancoAPP", -1);
      }
      $cordovaSQLite.execute(db,
        "CREATE TABLE IF NOT EXISTS cliente (id integer primary key, nome text, sobrenome text)");

        $cordovaSQLite.execute(db,
          "CREATE TABLE IF NOT EXISTS fornecedor (id integer primary key, nome text, email text, cnpj text)");
      return db;
    };
  });
