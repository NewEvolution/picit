app.controller("AddCtrl",
  ["$scope",
  "$routeParams",
  "$firebaseArray",
  "uidHandle",
  function($scope, $routeParams, $firebaseArray, uidHandler) {

    var ref = new Firebase("https://picit-nss.firebaseio.com/pics");
    $scope.boards = $firebaseArray(ref);
    $scope.newItem = {};
    $scope.uid = uidHandler.getUid();
    $scope.setBoard = function(boardName) {
      $scope.newItem.boardId = boardName;
    };
    $scope.addPic = function() {
      $scope.boards.$add({

        type: "pin",
        url: $scope.newItem.url || null,
        title: $scope.newItem.title || null,
        boardId: $scope.newItem.boardId,
        private: $scope.newItem.private || false,
        userId: $scope.uid || null,
        description: $scope.newItem.description || null
      });
      $scope.newItem = {};
    };
  }
]);