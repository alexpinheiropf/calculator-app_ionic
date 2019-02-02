angular.module('amigopet')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('menu', {
        url: '/menu',
        abstract: true,
        templateUrl: 'view/menu.html',
        controller: 'menuController'
      })

      .state('start', {
        url: '/start',
        templateUrl: 'view/start.html',
        controller: 'loginController'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'view/login.html',
        controller: 'loginController'
      })

      //Rota para Usuario
      .state('menuUsuario', {
        url: '/menuUsuario',
        templateUrl: 'view/menuUsuario.html',
        controller: 'usuarioController'
      })
      .state('listaUsuario', {
        url: '/listaUsuario',
        templateUrl: 'view/listaUsuario.html',
        controller: 'usuarioController'
      })

      .state('cadastroUsuario', {
        url: '/cadastroUsuario',
        templateUrl: 'view/cadastroUsuario.html',
        controller: 'usuarioController'
      })

      .state('menu.conta', {
        url: '/conta',
        data : { auth : true },
        views: {
          'menuContent': {
            templateUrl: 'view/conta.html',
            controller: 'usuarioController'
          }
        }
      })

      .state('menu.editarUsuario', {
        url: '/editarUsuario',
        data : { auth : true },
        views: {
          'menuContent': {
            templateUrl: 'view/editarUsuario.html',
            controller: 'usuarioController'
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

    $urlRouterProvider.otherwise('/start')
  });
