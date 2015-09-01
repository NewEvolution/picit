app.controller("PinCtrl", [ "$scope", "$routeParams", "$firebaseArray", "$firebaseObject", "$anchorScroll", "uidHandle", 
function($scope, $routeParams, $firebaseArray, $firebaseObject, $anchorScroll, uidHandler) {

  var ref = new Firebase("https://picit-nss.firebaseio.com/pics");
  var pin = new Firebase("https://picit-nss.firebaseio.com/pics/" + $routeParams.clickedPin);
  $scope.boardId = [];
  $scope.uid = uidHandler.getUid();
  $scope.newItem = {};

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

  $scope.deleteIt = function() {
      ref.child($routeParams.clickedPin).remove();
      window.location = "#/";
  };

  $scope.choosePic = function(clickedPic) {
    var picRef = new Firebase("https://picit-nss.firebaseio.com/pics/" + clickedPic);
    $scope.picObj = $firebaseObject(picRef);
  };
  
  $scope.setBoard = function(boardId) {
    $scope.boardId = boardId;
    console.log($scope.boardId);
  };

  $scope.addPic = function() {
    $scope.picObj.boardId.push($scope.boardId);
    $scope.picObj.$save();
  };

  $scope.addBoard = function () {
    $scope.boards.$add({
      type: "board",
      title: $scope.newBoard.title || null,
      private: $scope.newItem.private || false,
      userId: uidHandler.getUid(),
      description: $scope.newBoard.description || null,
    }).then(function(ref) {
      $scope.picObj.boardId.push(ref.key());
      $scope.picObj.$save();
    });
  };
}]);