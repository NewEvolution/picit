// app.controller("FaceCtrl", ["$scope", "$firebaseAuth", 
//   function($scope, $firebaseAuth) {

//   $scope.FBLogin = function() {

//     console.log("fblogin clicked");

//     var ref = new Firebase("https://picit-nss.firebaseio.com");

//     create an instance of the authentication service
//     var auth = $firebaseAuth(ref);
//     $scope.mainContentHidden = true;

//     login with Facebook
//     auth.$authWithOAuthPopup("facebook").then(function(authData) {
//       console.log("Logged in as:", authData.uid);
//       $scope.mainContentHidden = false;

//     }).catch(function(error) {
//       console.log("Authentication failed:", error);
//     });
//   };
// }]);