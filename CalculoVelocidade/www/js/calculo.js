angular.module('calculadoraAngular')
  .service('calculos', function() {
    this.calcVelocidade = function(distancia, tempo) {
      var velocidade = distancia / (tempo / 60);
      return velocidade;
    };
  });
