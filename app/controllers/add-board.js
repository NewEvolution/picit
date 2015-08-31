app.controller("boardCtrl",
  ["$scope",
  "$routeParams",
  "$firebaseArray",
  "uidHandle",
  function($scope, $routeParams, $firebaseArray, uidHandler) {

  var ref = new Firebase("https://picit-nss.firebaseio.com/pics");
    $scope.messages = $firebaseArray(ref);
    $scope.newItem = {};
    $scope.addBoard = function() {
      $scope.messages.$add({

        type: "board",
        title: $scope.newItem.title,
        pinIds: [],
        //boardId: $scope.newItem.boardId,
        private: $scope.newItem.private || false,
        userId: uidHandler.getUid(),
        description: $scope.newItem.description
      });
    window.location = '#/board'
      $scope.newItem = {};
    };
  }
]);



