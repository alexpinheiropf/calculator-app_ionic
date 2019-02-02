angular.module('calculadoraAngular')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'templates/login.html',
        controller: 'loginController'
      })
      .state('menu', {
        url: '/menu',
        templateUrl: 'templates/menu.html',
        controller: 'menuController'
      })
      .state('calcular', {
        url: '/calcular',
        templateUrl: 'templates/calcular.html',
        controller: 'imcController'
      })
      .state('resultado', {
        url: '/resultado',
        templateUrl: 'templates/resultado.html',
        controller:'resultadoController'
      })
    $urlRouterProvider.otherwise('/')
  });
