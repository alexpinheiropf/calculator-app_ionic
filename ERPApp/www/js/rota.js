angular.module('starter')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'view/login.html',
        controller: 'loginController'
      })

      .state('menu', {
        url: '/menu',
        templateUrl: 'view/menu.html',
        controller: 'menuController'
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
        controller: 'usuarioController',
      })
      .state('cadastroUsuario', {
        url: '/cadastroUsuario',
        templateUrl: 'view/cadastroUsuario.html',
        controller: 'usuarioController'
      })

      //Rota para Projeto
      .state('menuProjeto', {
        url: '/menuProjeto',
        templateUrl: 'view/menuProjeto.html',
        controller: 'projetoController'
      })
      .state('listaProjeto', {
        url: '/listaProjeto',
        templateUrl: 'view/listaProjeto.html',
        controller: 'projetoController',
      })
      .state('cadastroProjeto', {
        url: '/cadastroProjeto',
        templateUrl: 'view/cadastroProjeto.html',
        controller: 'projetoController'
      })

      //Rota para Instituicao
      .state('menuInstituicao', {
        url: '/menuInstituicao',
        templateUrl: 'view/menuInstituicao.html',
        controller: 'instituicaoController'
      })
      .state('listaInstituicao', {
        url: '/listaInstituicao',
        templateUrl: 'view/listaInstituicao.html',
        controller: 'instituicaoController',
      })
      .state('cadastroInstituicao', {
        url: '/cadastroInstituicao',
        templateUrl: 'view/cadastroInstituicao.html',
        controller: 'instituicaoController'
      })

    $urlRouterProvider.otherwise('/login')
  });
