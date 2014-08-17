(function () {
    'use strict';

    var theModule = angular.module('directives.isFocused', []);

    theModule.directive('isFocused', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.$watch(attrs.isFocused, function (value) {
                    if (value) {
                        element[0].focus();
                    }
                });
                element.bind('blur', function () {
                    $timeout(function () {
                        scope.$apply(attrs.isFocused + '=false');
                    }, 0);
                });
                element.bind('focus', function () {
                    $timeout(function () {
                        scope.$apply(attrs.isFocused + '=true');
                    }, 0);
                });
            }
        };
    });
}());
