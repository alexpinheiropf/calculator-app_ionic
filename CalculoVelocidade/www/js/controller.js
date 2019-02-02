angular.module('calculadoraAngular')
  .controller('velocidadeController', function($scope, $rootScope, $ionicPopup, $location, calculos) {
    $scope.dados = {};
    $scope.desenvolvedor = "Alex Pinheiro";
    $scope.executar = function(dados) {
      if (!dados.distancia) {
        $ionicPopup.alert({
          title: 'Erro',
          template: 'A distancia é obrigatória'
        });
      } else if (!dados.tempo) {
        $ionicPopup.alert({
          title: 'Erro',
          template: 'O tempo é obrigatória'
        });
      } else {
        var velocidade = calculos.calcVelocidade(dados.distancia, dados.tempo);
        $rootScope.velocidade = velocidade;
        $location.path('/resultado');
      }
    }
  });
