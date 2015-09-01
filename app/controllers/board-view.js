app.controller("BoardViewCtrl",
  function($scope, $firebaseArray, $routeParams) {
    var ref = new Firebase("https://picit-nss.firebaseio.com/pics/");
    $scope.boards = $firebaseArray(ref);
    console.log($routeParams);

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