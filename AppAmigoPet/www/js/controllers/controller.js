angular.module('amigopet')

  .controller('contacontroller', function($scope, $rootScope, $state, $ionicPopup) {

    //readonly property is used to control editability of account form
    $scope.readonly = true;

    // #SIMPLIFIED-IMPLEMENTATION:
    // We act on a copy of the root user
    $scope.accountUser = angular.copy($rootScope.user);
    var userCopy = {};

    $scope.startEdit = function() {
      $scope.readonly = false;
      userCopy = angular.copy($scope.usuario);
    };

    $scope.cancelEdit = function() {
      $scope.readonly = true;
      $scope.usuario = userCopy;
    };

    // #SIMPLIFIED-IMPLEMENTATION:
    // this function should call a service to update and save
    // the data of current user.
    // In this case we'll just set form to readonly and copy data back to $rootScope.
    $scope.saveEdit = function() {
      $scope.readonly = true;
      $rootScope.usuario = $scope.contacontroller;
    };

  })

  // .controller('LoginCtrl', function($scope, $state, $rootScope) {
  //
  //   // #SIMPLIFIED-IMPLEMENTATION:
  //   // This login function is just an example.
  //   // A real one should call a service that checks the auth against some
  //   // web service
  //
  //   $scope.login = function() {
  //     //in this case we just set the user in $rootScope
  //     $rootScope.user = {
  //       email: "mary@ubiqtspaces.com",
  //       name: "Mary Ubiquitous",
  //       address: "Rue de Galvignac",
  //       city: "RonnieLand",
  //       zip: "00007",
  //       avatar: 'sampledata/images/avatar.jpg'
  //     };
  //     //finally, we route our menu to the 'menu.shop' view
  //     $state.go('menu.promocoes');
  //   };
  //
  // })
