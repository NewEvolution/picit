var app = angular.module("PicitApp", ["ngRoute", "angular.filter", "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/login.html',
        controller: 'AuthCtrl'
      }).when('/main', {
        templateUrl: 'partials/initial-view.html',
        controller: 'InitCtrl'
      }).when('/add', {
        templateUrl: 'partials/add-pic.html',
        controller: 'AddCtrl'
      }).when('/user', {
        templateUrl: 'partials/user-view.html',
        controller: 'UserCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  }]);