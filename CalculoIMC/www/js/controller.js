angular.module('calculadoraAngular')
  .controller('imcController', function($scope, $rootScope, $ionicPopup, $location, calculos) {
    $scope.dados = {};
    $scope.executar = function(dados) {
      if (!dados.nome) {
        $ionicPopup.alert({
          title: 'Erro',
          template: 'O Nome é obrigatório'
        });
      }

      else if (!dados.sobrenome) {
        $ionicPopup.alert({
          title: 'Erro',
          template: 'O Sobrenome é obrigatório'
        });
      }

      else if (!dados.peso) {
        $ionicPopup.alert({
          title: 'Erro',
          template: 'O Peso é obrigatório'
        });
      }

      else if (!dados.altura) {
        $ionicPopup.alert({
          title: 'Erro',
          template: 'A Altura é obrigatória'
        });
      }

       else {
        var imc = calculos.calcImc(dados.nome, dados.sobrenome, dados.peso, dados.altura);
        $rootScope.imc = imc;
        $location.path('/resultado');
      }
    }
  });
