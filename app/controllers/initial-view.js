app.controller("InitCtrl",
  function($scope, $firebaseArray) {
    var ref = new Firebase("https://picit-nss.firebaseio.com/pics");
    $scope.boards = $firebaseArray(ref);
    console.log($scope.boards);

  $(document).on('mouseenter', "div.pin", function() {
    $(".tack").show();
  });  

  $(document).on('mouseleave', ".pin", function() {
    $(".tack").hide();
  });
  
  // $scope.onMouseEnter = function showTack() {
  //   $(".tack").css("display", "inline-block");
  //   console.log("function called");
  // };
});