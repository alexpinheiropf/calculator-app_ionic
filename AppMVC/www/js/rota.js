angular.module('starter')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('menu', {
        url: '/menu',
        templateUrl: 'view/menu.html',
        controller: 'menuController'
      })
      .state('menuUsuario', {
        url: '/menuUsuario',
        templateUrl: 'view/menuUsuario.html',
        controller: 'usuarioController'
      })
      .state('cadastroUsuario', {
        url: '/cadastroUsuario',
        templateUrl: 'view/cadastroUsuario.html',
        controller: 'usuarioController'
      })

      .state('listaUsuario', {
        url: '/listaUsuario',
        templateUrl: 'view/listaUsuario.html',
        controller: 'usuarioController'
      })

      .state('menuProduto', {
        url: '/menuProduto',
        templateUrl: 'view/menuProduto.html',
        controller: 'produtoController'
      })

      .state('cadastroProduto', {
        url: '/cadastroProduto',
        templateUrl: 'view/cadastroProduto.html',
        controller: 'produtoController'
      })

      .state('listaProduto', {
        url: '/listaFornecedor',
        templateUrl: 'view/listaProduto.html',
        controller: 'produtoController'
      })

    $urlRouterProvider.otherwise('/menu')
  });
