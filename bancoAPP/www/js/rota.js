angular.module('starter')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('menu', {
        url: '/menu',
        templateUrl: 'view/menu.html'
      })
      .state('menuCliente', {
        url: '/menuCliente',
        templateUrl: 'view/menuCliente.html'
      })
      .state('cadastroCliente', {
        url: '/cadastroCliente',
        templateUrl: 'view/cadastroCliente.html',
        controller: 'clienteController'
      })

      .state('listaCliente', {
        url: '/listaCliente',
        templateUrl: 'view/listaCliente.html',
        controller: 'clienteController'
      })

      .state('menuFornecedor', {
        url: '/menuFornecedor',
        templateUrl: 'view/menuFornecedor.html'
      })

      .state('cadastroFornecedor', {
        url: '/cadastroFornecedor',
        templateUrl: 'view/cadastroFornecedor.html',
        controller: 'fornecedorController'
      })

      .state('listaFornecedor', {
        url: '/listaFornecedor',
        templateUrl: 'view/listaFornecedor.html',
        controller: 'fornecedorController'
      })

    $urlRouterProvider.otherwise('/menu')
  });
