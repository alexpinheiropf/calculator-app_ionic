angular.module('calculadoraAngular')
  // Controller para Calculo
  .controller('imcController', function($scope, $rootScope, $ionicPopup, $location, calculos, credencial) {
    $scope.dados = {};
    $scope.executar = function(dados) {
      if (!dados.nome) {
        $ionicPopup.alert({
          title: 'Atenção',
          template: 'O Nome é obrigatório'
        });
      } else if (!dados.sobrenome) {
        $ionicPopup.alert({
          title: 'Atenção',
          template: 'O Sobrenome é obrigatório'
        });
      } else if (!dados.peso) {
        $ionicPopup.alert({
          title: 'Atenção',
          template: 'O Peso é obrigatório'
        });
      } else if (!dados.altura) {
        $ionicPopup.alert({
          title: 'Atenção',
          template: 'A Altura é obrigatória'
        });
      } else {
        var imc = calculos.calcImc(dados.nome, dados.sobrenome, dados.peso, dados.altura);
        $rootScope.imc = imc;
        $location.path('/resultado');
      }
    }
    $scope.logout = function(valor) {
      // var login = credencial(validacao.usuario, validacao.senha);

      if (valor == 1) {
        $ionicPopup.alert({
          title: 'Atenção',
          template: 'logout'
        });
        $location.path('/login');
      }
    }
  });
