(function() {
  'use strict'

  angular
    .module('app')
    .factory('HomeService', HomeService);

  function HomeService($http, $q) {
    var cast = [];
    return{
      getCast: function () {
        return $http.get('home/characters.json').then(function(result) {
          cast = result.data;
          console.log(cast);
          return cast;
        });
      }
    }
  }
})();
