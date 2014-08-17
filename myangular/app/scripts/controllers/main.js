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
            var fieldIdName = 'input'+ $scope.clickCount;
            //setFocusViaDirective(fieldIdName);
            setFocusViaJQuery(fieldIdName);
        };

        var countClicks = function(){
            if($scope.clickCount >= 9){
              $scope.clickCount = 1;
            } else {
                $scope.clickCount++;
            }
        };
//
//        var setFocusViaDirective = function(fieldIdName){
//            $scope.focusStatus[fieldIdName] = true;
//            for(var property in $scope.focusStatus){
//                if(property !== fieldIdName){
//                    $scope.focusStatus[property] = false;
//                }
//            }
//        };

        var setFocusViaJQuery = function(fieldIdName){
            console.log('fieldIdName=' + fieldIdName);
            //all works. has to use "id". "name" won't work.
            //document.getElementById(fieldIdName).focus();
            //angular.element('#'+fieldIdName).trigger('focus') ;

              $('#'+ fieldIdName).trigger('focus');
        };

        $scope.title = 'Test Page';
    });
