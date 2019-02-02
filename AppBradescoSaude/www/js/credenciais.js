angular.module('calculadoraAngular')
  .service('credencial', function($ionicPopup) {
    this.comparaDados = function(usuario, senha) {
      var email = "admin@gmail.com";
      var cpf = 12345678910;
      var pass = 123;
      var mensagem;
      var valida = false;

      if (usuario == cpf || usuario == email && pass == 123) {
        valida = true;
      } else if (usuario != cpf || usuario != email || pass != 123) {
        mensagem = $ionicPopup.alert({
          title: 'Atenção',
          template: 'Usuário ou senha Incorreto!!!'
        });
        valida = false;
      }

      if (valida != true) {
        return login.html;
      }

    };
  });
