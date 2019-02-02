angular.module('amigopet')
  .service('tools', function($cordovaSQLite, $ionicPopup) {
    this.msgConfirm = function(titulo, mensagem) {
      var confirmPopup = $ionicPopup.confirm({
        title: titulo,
        template: mensagem
      });
      return confirmPopup;
    };
    this.msg = function(titulo, mensagem) {
      $ionicPopup.alert({
        title: titulo,
        template: '<b>' + mensagem + '</b>'
      });
    };
  });
