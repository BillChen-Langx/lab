'use strict';

/**
 * @ngdoc function
 * @name myangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myangularApp
 */
angular.module('myangularApp')
    .controller('MainCtrl', function ($scope) {
        $scope.focusStatus = {
            input1: false,
            input2: false,
            input3: false,
            input4: false,
            input5: false,
            input6: false,
            input7: false,
            input8: false
        };

        $scope.clickCount = 0;
        $scope.onTestBtnClick = function(){
            countClicks();

            var statusName = 'input'+ $scope.clickCount;
            $scope.focusStatus[statusName] = true;
            for(var property in $scope.focusStatus){
                if(property !== statusName){
                    $scope.focusStatus[property] = false;
                }
            }

           // console.log('$scope.focusStatus.input' + $scope.clickCount + '=' +
         //       $scope.focusStatus[statusName]);
        };

        var countClicks = function(){
            if($scope.clickCount >= 8){
              $scope.clickCount = 1;
            } else {
                $scope.clickCount++;
            }
        };

        $scope.title = 'Test Page';
    });
