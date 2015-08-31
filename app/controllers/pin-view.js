app.controller("PinCtrl", [ "$scope", "$routeParams", "$firebaseArray", "$firebaseObject", "$anchorScroll", 
function($scope, $routeParams, $firebaseArray, $firebaseObject, $anchorScroll) {

  var ref = new Firebase("https://picit-nss.firebaseio.com/pics");
  var pin = new Firebase("https://picit-nss.firebaseio.com/pics/" + $routeParams.clickedPin);

  $scope.boards = $firebaseArray(ref);
  $scope.pin = $firebaseObject(pin);
  $scope.pin.$loaded(function(data) {
    $scope.boardId = data.boardId;
  });
  $anchorScroll("#top");
}]);