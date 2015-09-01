app.controller("UserCtrl", [ "$scope", "$firebaseArray", "uidHandle", function($scope, $firebaseArray, uidHandle) {

  var ref = new Firebase("https://picit-nss.firebaseio.com/pics");

  $scope.uid = uidHandle.getUid();
  $scope.boards = $firebaseArray(ref);
  $scope.boardPics = $firebaseArray(ref);

  $scope.deleteIt = function(pics) {
      ref.child(pics).remove();
  };
}]);