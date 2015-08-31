app.controller("InitCtrl",
  function($scope, $firebaseArray) {
    var ref = new Firebase("https://picit-nss.firebaseio.com/pics");
    $scope.boards = $firebaseArray(ref);
    console.log($scope.boards);

  $(".initial-view").on('mouseenter', "div.pin", function() {
    $(this).children(".tack").removeClass("invisible");
  });  

  $(".initial-view").on('mouseleave', ".pin", function() {
    $(this).children(".tack").addClass("invisible");
  });

  $scope.messages = $firebaseArray(ref);
    $scope.deleteIt = function(pics) {
        ref.child(pics).remove();
    };
  
  // $scope.onMouseEnter = function showTack() {
  //   $(".tack").css("display", "inline-block");
  //   console.log("function called");
  // };
});