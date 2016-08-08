angular.module('app')

  .controller('userCtrl', ['$scope', function($scope) {
    $scope.title = "User Controller Title";
    $scope.users = ['larry','curly','moe'];
  }])
