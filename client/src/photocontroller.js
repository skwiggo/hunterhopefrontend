angular.module('hunterHope').controller('PhotosCtrl', ["$scope", "$http", function($scope, $http) {
      $http.get("https://sheltered-fjord-80898.herokuapp.com/photos")
      .then(function(response) {
          $scope.photos = response.data;
      });
    }  
  ]);