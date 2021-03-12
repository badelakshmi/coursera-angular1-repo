(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  function LunchCheckController($scope, $filter){
    $scope.name = "Lakshmi"

    $scope.lunchcheck = function(){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    }
  }

})();
