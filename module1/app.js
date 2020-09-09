(function() {
  'use strict';
  angular.module('LunchCheck', []).controller('LunchCheckController', myController);
  myController.$inject = ['$scope'];

  function myController($scope) {
    $scope.lunchItems = "";
    $scope.message = "";
    $scope.checkItems = function() {
      const arr = $scope.lunchItems.split(',');
      if ($scope.lunchItems === "")
        $scope.message = "Please enter data first";
      else if (arr.length <= 3)
        $scope.message = "Enjoy!";
      else {
        $scope.message = "Too much!";
      }
    };
  }
})();