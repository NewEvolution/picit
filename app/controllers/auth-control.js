app.controller("AuthCtrl", [ "$scope", "$firebaseAuth", "uidHandle", function($scope, $firebaseAuth, uidHandle) {
  
  var ref = new Firebase("https://picit-nss.firebaseio.com/pics");
  
  var auth = $firebaseAuth(ref);
  $scope.mainContentHidden = true;

  auth.$authWithOAuthPopup("github").then(function(authData) {
    console.log("Logged in as:", authData.uid);
    uidHandle.setUid(authData.uid);
    $scope.mainContentHidden = false;
  }).catch(function(error) {
    console.log("Authentication failed:", error);
    alert("Login failed, please try again.");
  });
}]);