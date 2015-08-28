app.controller("AddCtrl",
  ["$scope",
  "$routeParams",
  "$firebaseArray",
  function($scope, $routeParams, $firebaseArray) {

  var ref = new Firebase("picit-nss.firebaseio.com");
    $scope.messages = $firebaseArray(ref);
    $scope.addPic = function() {
      $scope.messages.$add({
        type: $scope.newItem.type,
        type: $scope.newItem.url,
        type: $scope.newItem.title,
        type: $scope.newItem.boardId,
        type: $scope.newItem.private,
        type: $scope.newItem.userId,
        type: $scope.newItem.description
        
      });
    };
  }

  ]);