app.controller("BoardViewCtrl",
function($scope, $firebaseArray, $firebaseObject, $routeParams) {
  var ref = new Firebase("https://picit-nss.firebaseio.com/pics/");
  var boardRef = new Firebase("https://picit-nss.firebaseio.com/pics/" + $routeParams.clickedBoard);
  $scope.boards = $firebaseArray(ref);
  var clickedBoard = $firebaseObject(boardRef);
  clickedBoard.$loaded(function(data) {
    $scope.theBoard = data.title;
    console.log($scope.theBoard);
  });

  $(".initial-view").on('mouseenter', "div.pin", function() {
    $(this).children(".tack").removeClass("invisible");
  });  

  $(".initial-view").on('mouseleave', ".pin", function() {
    $(this).children(".tack").addClass("invisible");
  });

  $scope.gotoPin = function(sentItem) {
    window.location = "#/pin/" + sentItem.$id;
    $("input").val("");
  };

    $scope.deleteIt = function(pics) {
        ref.child(pics).remove();
    };
});