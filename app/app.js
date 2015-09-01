var app = angular.module("PicitApp", ["ngRoute", "angular.filter", "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/initial-view.html',
        controller: 'InitCtrl'
      }).when('/add', {
        templateUrl: 'partials/add-pic.html',
        controller: 'AddCtrl'
      }).when('/user', {
        templateUrl: 'partials/user-view.html',
        controller: 'UserCtrl'
      }).when('/board', {
        templateUrl: 'partials/board.html',
        controller: 'boardCtrl'
      }).when('/board/:clickedBoard', {
        templateUrl: 'partials/board-view.html',
        controller: 'BoardViewCtrl'
      }).when('/pin/:clickedPin', {
        templateUrl: 'partials/pin.html',
        controller: 'PinCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  }]);