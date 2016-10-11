(function() {
  angular
  .module('app')

  .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope','HomeService'];

  function homeCtrl($scope, HomeService) {
    var vm = this;
    vm.cast = [];
    HomeService.getCast().then(function(cast) {
      $scope.cast = cast;
    });
    $scope.title = 'the Potter-verse';
    $scope.name = 'Lee';
  }

})();
