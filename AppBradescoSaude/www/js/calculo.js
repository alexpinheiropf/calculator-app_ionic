angular.module('calculadoraAngular')
  .service('calculos', function() {
    this.calcImc = function(nome, sobrenome, peso, altura) {

      var imc = peso / (altura * altura);
      var mensagem;

      if (imc < 18.5){
        mensagem = "abaixo do Peso";
      }
      else if(imc >= 18.5 || imc < 24.9 )  {
        mensagem = "com peso Normal";
      }
      else if(imc >= 24.9 || imc < 29.9 )  {
        mensagem = "com sobrepeso";
      }
      else if(imc >= 30 || imc < 34.9 )  {
        mensagem = "com obesidade Grau 1";
      }
      else if(imc >= 35 || imc < 39.9 )  {
        mensagem = "com obesidade Grau 2";
      }
      else if (imc >= 40 )  {
        mensagem = "com obesidade Grau 3 ou Mórbida";
        }

    var resultado = "Olá " + nome + " " + sobrenome + " você está " + mensagem + " com IMC de " + imc;

    return resultado;

    };
  });
