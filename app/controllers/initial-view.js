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
});