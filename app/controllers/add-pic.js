app.controller("AddCtrl",
  ["$scope",
  "$routeParams",
  "$firebaseArray",
  "uidHandle",
  function($scope, $routeParams, $firebaseArray, uidHandler) {

  var ref = new Firebase("https://picit-nss.firebaseio.com/pics");
    $scope.messages = $firebaseArray(ref);
    $scope.newItem = {};
    $scope.addPic = function() {
      $scope.messages.$add({

        type: "pin",
        url: $scope.newItem.url,
        title: $scope.newItem.title,
        //boardId: $scope.newItem.boardId,
        private: $scope.newItem.private || false,
        userId: uidHandler.getUid(),
        description: $scope.newItem.description
      });
      $scope.newItem = {};
    };
  }
]);