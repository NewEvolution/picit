var app = angular.module("PicitApp", ["ngRoute", "angular.filter", "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/login.html',
        controller: ''
      }).when('/add', {
        templateUrl: 'partials/.html',
        controller: 'AddCtrl'
      }).when('/:somevar', {
        templateUrl: 'partials/.html',
        controller: 'DetailCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  }]);