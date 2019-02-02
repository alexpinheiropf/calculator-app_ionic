angular.module('amigopet')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('menu', {
        url: '/menu',
        abstract: true,
        templateUrl: 'view/menu.html',
        // controller: 'menuController'
      })

      .state('menu.start', {
        url: '/start',
        views: {
          'menuContent': {
            templateUrl: 'view/start.html'
          }
        }
      })

      .state('menu.login', {
        url: '/login',
        cached : false,
        views: {
          'menuContent': {
            templateUrl: 'view/login.html',
            controller: 'loginController'
          }
        }
      })

      .state('menu.cadastro', {
        url: '/cadastro',
        views: {
          'menuContent': {
            templateUrl: 'view/cadastro.html',
            // controller: 'dadosController'
          }
        }
      })

      .state('menu.conta', {
        url: '/conta',
        data : { auth : true },
        views: {
          'menuContent': {
            templateUrl: 'view/conta.html',
            controller : 'contacontroller'
          }
        }
      })

      .state('menu.resetaSenha', {
        url: '/resetaSenha',
        views: {
          'menuContent': {
            templateUrl: 'view/resetaSenha.html',
            // controller: 'dadosController'
          }
        }
      })

      .state('menu.promocoes', {
        url: '/promocoes',
        views: {
          'menuContent': {
            templateUrl: 'view/promocoes.html',
            // controller: 'dadosController'
          }
        }
      })

      .state('menu.petshop', {
        url: '/petshop',
        views: {
          'menuContent': {
            templateUrl: 'view/petshop.html',
            // controller: 'dadosController'
          }
        }
      })

      .state('menu.maps', {
        url: '/maps',
        views: {
          'menuContent': {
            templateUrl: 'view/maps.html',
            controller: 'mapaController'
          }
        }
      })

      .state('menu.servicos', {
        url: '/servicos',
        views: {
          'menuContent': {
            templateUrl: 'view/servicos.html',
            // controller: 'dadosController'
          }
        }
      })

      .state('menu.banhoetosa', {
        url: '/banhoetosa',
        views: {
          'menuContent': {
            templateUrl: 'view/banhoetosa.html',
            // controller: 'dadosController'
          }
        }
      })


    $urlRouterProvider.otherwise('/menu/start')
  });
