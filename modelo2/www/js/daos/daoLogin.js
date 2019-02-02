angular.module('amigopet')
  .service('daoLogin', function($ionicPopup) {
    this.comparaDados = function(login, senha) {

      var cpf = "12345678910";
      var email = "a";
      var password = "a";
      var mensagem;
      var valida = false;

      if((cpf == login || email == login) && password == senha){
        valida = true;
        mensagem = login + " " + senha;
      }
      else if(cpf != login || email != login && password != senha){
        mensagem = $ionicPopup.alert({
          title: 'Atenção',
          template: 'Usuário ou senha Incorreto!!!'
        });
        valida = false;
      }

      if (valida != true) {
        $location.path("/login")
      }

    return mensagem;

    };
  });
