app.controller("UserCtrl", [ "$scope", "$firebaseArray", "uidHandle", function($scope, $firebaseArray, uidHandle) {

  var ref = new Firebase("https://picit-nss.firebaseio.com/pics");

  $scope.uid = uidHandle.getUid();
  $scope.boards = $firebaseArray(ref);
  $scope.boardPics = $firebaseArray(ref);

  $(".initial-view").on('mouseenter', "div.pin", function() {
    $(this).children(".tack").removeClass("invisible");
  });  

  $(".initial-view").on('mouseleave', ".pin", function() {
    $(this).children(".tack").addClass("invisible");
  });

  $scope.deleteIt = function(pics) {
      ref.child(pics).remove();
  };
  
  $scope.openBoard = function(clickedBoard) {
    window.location = "#/board/" + clickedBoard.$id;
  };
}]);