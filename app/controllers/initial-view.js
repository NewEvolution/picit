app.controller("InitCtrl", ["$scope", "$firebaseArray", "$firebaseObject", "uidHandle",
function($scope, $firebaseArray, $firebaseObject, uidHandler) {
  var ref = new Firebase("https://picit-nss.firebaseio.com/pics");
  $scope.boards = $firebaseArray(ref);
  $scope.uid = uidHandler.getUid();
  $scope.newItem = {};

  $(".initial-view").on('mouseenter', "div.pin", function() {
    $(this).children(".tack").removeClass("invisible");
  });  

  $(".initial-view").on('mouseleave', ".pin", function() {
    $(this).children(".tack").addClass("invisible");
  });

  $scope.gotoPin = function(sentItem) {
    window.location = "#/pin/" + sentItem.$id;
  };

  $scope.deleteIt = function(pics) {
      ref.child(pics).remove();
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