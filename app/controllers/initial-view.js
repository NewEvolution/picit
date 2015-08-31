app.controller("InitCtrl",
  function($scope, $firebaseArray) {
    var ref = new Firebase("https://picit-nss.firebaseio.com/pics");
    $scope.boards = $firebaseArray(ref);
    console.log($scope.boards);

  $(".initial-view").on('mouseenter', ".pin", function() {
    $(this).children(".tack").show();
  });  

  $(".initial-view").on('mouseleave', ".pin", function() {
    $(".tack").hide();
  });
  
  // $scope.onMouseEnter = function showTack() {
  //   $(".tack").css("display", "inline-block");
  //   console.log("function called");
  // };
});