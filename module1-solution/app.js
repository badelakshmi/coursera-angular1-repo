// (function () {
//   'use strict';
//   angular.module('LunchCheck',[])
//   .controller('LunchCheckController', LunchCheckController);
//   LunchCheckController.$inject=['$scope', '$filter'];
//   function LunchCheckController($scope, $filter){
//     $scope.name = ""
//     $scope.lunchcheckmessage = ""
//     $scope.lunchcheck = function(){
//       var itemCount = 0;
//       itemCount = $scope.name.split(',').length;
//       if ($scope.name == null || $scope.name == ""){
//         $scope.lunchcheckmessage = "Please enter data first"
//       }else if(itemCount<=3){
//         $scope.lunchcheckmessage = "Enjoy!";
//       }else if(itemCount>3){
//         $scope.lunchcheckmessage = "Too much!";
//       }
//     }
//   }
//
// })();

!function(){"use strict";function e(e,c){e.name="",e.lunchcheckmessage="",e.lunchcheck=function(){var c;c=e.name.split(",").length,null==e.name||""==e.name?e.lunchcheckmessage="Please enter data first":c<=3?e.lunchcheckmessage="Enjoy!":c>3&&(e.lunchcheckmessage="Too much!")}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope","$filter"]}();
