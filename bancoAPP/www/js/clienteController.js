angular.module('starter')
  .controller('clienteController', function(
    $rootScope, $scope, $ionicPopup, $location,
    $cordovaSQLite, conectaBanco
  ) {
    var db = conectaBanco.conectar();
    $scope.dados = {};
    $scope.salvar = function(dados) {
      if (!dados.txtNome) {
        $ionicPopup.alert({
          title: 'Erro',
          template: '<b>Nome é obrigatório </b>'
        });
      } else if (!dados.txtSobrenome) {
        $ionicPopup.alert({
          title: 'Erro',
          template: '<b>Sobrenome é obrigatório </b>'
        });
      } else {

        var confirmPopup = $ionicPopup.confirm({
          title: 'APP',
          template: 'Deseja Salvar o Registro?'
        });

        confirmPopup.then(function(res) {
          if (res) {
            var nome = dados.txtNome;
            var sobrenome = dados.txtSobrenome;
            var id = dados.txtId;
            if (dados.txtId) {
              var query = "UPDATE cliente set nome = ?, sobrenome = ? where id = ?";
              $cordovaSQLite.execute(db, query, [nome, sobrenome, id]).then(function(res) {
                console.log("UPDATE ID -> " + id);
              }, function(err) {
                console.error(err);
              });
            } else {
              var query = "INSERT INTO cliente (nome, sobrenome) VALUES ( ? , ? )";
              $cordovaSQLite.execute(db, query, [nome, sobrenome]).then(function(res) {
                console.log("INSERT ID -> " + res.insertId);
              }, function(err) {
                console.error(err);
              });
            }
            $ionicPopup.alert({
              title: 'APP',
              template: '<b>Dados Salvos</b>'
            });
            $location.path('/menu');
          } else {
            $ionicPopup.alert({
              title: 'APP',
              template: '<b>Dados Não Salvos</b>'
            });
          }
        });


      }
    }

    $scope.pesquisar = function() {
      $scope.dados = {};
      var query = "SELECT * FROM cliente order by nome ASC";
      $cordovaSQLite.execute(db, query).then(function(res) {
        if (res.rows.length > 0) {
          var nregistros = 0;
          var nregistrosFinal = res.rows.length - 1;
          var results = [];
          while (nregistros <= nregistrosFinal) {
            console.log("SELECTED -> " + res.rows.item(nregistros).id +
              " " + res.rows.item(nregistros).nome + " " +
              res.rows.item(nregistros).sobrenome);
            results.push({
              id: res.rows[nregistros].id,
              nome: res.rows[nregistros].nome,
              sobrenome: res.rows[nregistros].sobrenome
            });
            nregistros++;
          }
          $scope.dados = results;
        } else {
          console.log("Nenhum dado encontrad");
        }
      }, function(err) {
        console.error(err);
      });
    };


    $scope.deletar = function(dados) {
      var query = "DELETE FROM cliente WHERE ID = ?";
      //aqui está o erro
      var id = dados;
      $cordovaSQLite.execute(db, query, [id]).then(function(res) {
        console.log("Delete ID -> " + id);
      }, function(err) {
        console.error(err);
      });
      $scope.pesquisar();
    }


  });
