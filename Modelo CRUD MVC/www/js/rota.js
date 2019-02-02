angular.module('starter')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('menu', {
        url: '/menu',
        templateUrl: 'view/menu.html',
        controller: 'menuController'
      })
      .state('menuCliente', {
        url: '/menuCliente',
        templateUrl: 'view/menuCliente.html',
        controller: 'clienteController'
      })
      .state('listaCliente', {
        url: '/listaCliente',
        templateUrl: 'view/listaCliente.html',
        controller: 'clienteController',
      })
      .state('cadastroCliente', {
        url: '/cadastroCliente',
        templateUrl: 'view/cadastroCliente.html',
        controller: 'clienteController'
      })

    $urlRouterProvider.otherwise('/menu')
  });
