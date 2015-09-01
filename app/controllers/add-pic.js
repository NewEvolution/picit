app.controller("AddCtrl",
["$scope",
"$routeParams",
"$firebaseArray",
"uidHandle",
function($scope, $routeParams, $firebaseArray, uidHandler) {

  var ref = new Firebase("https://picit-nss.firebaseio.com/pics");
  $scope.pic = $firebaseArray(ref);
  $scope.boards = $firebaseArray(ref);
  $scope.messages = $firebaseArray(ref);
  $scope.newItem = {};
  $scope.newBoard = {};
  $scope.uid = uidHandler.getUid();
  
  $scope.setBoard = function(boardName) {
    $scope.newItem.boardId = boardName;
  };


  $scope.addPic = function() {
    $scope.pic.$add({

      type: "pin",
      url: $scope.newItem.url || null,
      title: $scope.newItem.title || null,
      boardId: [$scope.newItem.boardId],
      private: $scope.newItem.private || false,
      userId: $scope.uid || null,
      description: $scope.newItem.description || null
    });
    $scope.newItem = {};
    };
    
    $scope.addBoard = function () {
      $scope.boards.$add({

        type: "board",
        title: $scope.newBoard.title || null,
        pinIds: [],
        //boardId: $scope.newItem.boardId,
        private: $scope.newItem.private || false,
        userId: uidHandler.getUid(),
        description: $scope.newBoard.description || null,
      }).then(function(ref) {
      var id = ref.key();
         $scope.pic.$add({

          type: "pin",
          url: $scope.newItem.url || null,
          title: $scope.newItem.title || null,
          boardId: [id] || null,
          private: $scope.newItem.private || false,
          userId: $scope.uid || null,
          description: $scope.newItem.description || null
        });
      });
    };
  }
]);