app.controller("PinCtrl", [ "$scope", "$routeParams", "$firebaseArray", "$firebaseObject", "$anchorScroll", 
function($scope, $routeParams, $firebaseArray, $firebaseObject, $anchorScroll) {

  var ref = new Firebase("https://picit-nss.firebaseio.com/pics");
  var pin = new Firebase("https://picit-nss.firebaseio.com/pics/" + $routeParams.clickedPin);
  $scope.boardId = [];

  $scope.boards = $firebaseArray(ref);
  $scope.pin = $firebaseObject(pin);
  
  $scope.pin.$loaded(function(data) {
    for (var i = 0; i < data.boardId.length; i++) {
      $scope.boardId.push(data.boardId[i]);
    }
  });
  
  $anchorScroll("#top");

  $scope.openBoard = function(clickedBoard) {
    window.location = "#/board/" + clickedBoard.$id;
  };
}]);