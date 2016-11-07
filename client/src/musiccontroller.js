angular.module('hunterHope').controller('MusicCtrl', ["$scope", "$http", function($scope, $http) {
      $http.get("https://sheltered-fjord-80898.herokuapp.com/releases")
          .then(function(response) {
          $scope.releases = response.data;
      });
    }  
  ]);


