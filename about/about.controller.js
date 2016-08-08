angular.module('app')

  .controller('aboutCtrl', ['$scope', function($scope) {
    $scope.title = "About";
    $scope.things = ['thing','ball','goose'];
  }])
