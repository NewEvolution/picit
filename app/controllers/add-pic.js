app.controller("AddCtrl",
  ["$scope",
  "$routeParams",
  "$firebaseArray",
  function($scope, $routeParams, $firebaseArray) {

  var ref = new Firebase("https://picit-nss.firebaseio.com/pics");
    $scope.messages = $firebaseArray(ref);
    $scope.newItem = {};
    $scope.addPic = function() {
      $scope.messages.$add({

        type: $scope.newItem.type,
        url: $scope.newItem.url,
        title: $scope.newItem.title,
        boardId: $scope.newItem.boardId,
        private: $scope.newItem.private,
        userId: $scope.newItem.userId,
        description: $scope.newItem.description

      });
    };
  }

  ]);