angular
  .module('app', [
    'ui.router',
    'ui.materialize'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'homeCtrl'
      })
      .state('about', {
        url:'/about',
        templateUrl: 'about/about.html',
        controller: 'aboutCtrl'
      })
      .state('user', {
        url: '/user',
        templateUrl: 'user/user.html',
        controller: 'userCtrl'
      })
      .state('user.profile', {
        url: '/profile',
        templateUrl: 'user/profile.html',
        controller: 'userCtrl'
      })
      .state('user.account', {
        url: '/account',
        templateUrl: 'user/account.html',
        controller: 'userCtrl'
      })
  }
  ])
