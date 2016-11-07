angular.module('hunterHope').controller('BlogCtrl', ["$scope", "$http", function($scope, $http) {
      $http.get("https://sheltered-fjord-80898.herokuapp.com/blogposts")
      .then(function(response) {
          $scope.posts = response.data;
      });
    }  
  ]);

