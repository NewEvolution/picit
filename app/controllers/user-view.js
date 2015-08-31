app.controller("UserCtrl", [ "$scope", "$firebaseArray", "$firebaseAuth", "uidHandle", function($scope, $firebaseArray, $firebaseAuth, uidHandle) {

  var ref = new Firebase("https://picit-nss.firebaseio.com/pics");
  var auth = $firebaseAuth(ref);

  $(".initial-view").off("**");

  $scope.uid = uidHandle.getUid();
  $scope.boards = $firebaseArray(ref);

  console.log(uidHandle.getUid());
}]);