angular.module('hunterHope').controller('TourCtrl', ["$scope", "$http", 'NgMap', function($scope, $http, NgMap) {
      $http.get("https://sheltered-fjord-80898.herokuapp.com/tourdates")
      .then(function(response) {
          $scope.tourDates = response.data;
      })
        $scope.map = NgMap.getMap('map');
    }
  ]);






