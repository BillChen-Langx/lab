(function () {
    'use strict';

    var theModule = angular.module('directives.isFocused', []);

    theModule.directive('isFocused', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.$watch(attrs.isFocused, function (value) {
                    console.log('in directive: scope.$watch('+ attrs.isFocused + ')=' + value );
                    if (value === true) {
                        element[0].focus();
                    }
                });
                element.bind('blur', function () {
                    console.log('blur in directive. attrs.isFocused=' + attrs.isFocused);
                    $('#logArea').val($('#logArea').val() +
                        'blur in directive. attrs.isFocused=' +
                        attrs.isFocused +'\n');
                    $timeout(function () {
                        scope.$apply(attrs.isFocused + '=false');
                    }, 0);
                });
                element.bind('focus', function () {
                    console.log('focus in directive. attrs.isFocused=' + attrs.isFocused);
                    $timeout(function () {
                        scope.$apply(attrs.isFocused + '=true');
                    }, 0);
                });
            }
        };
    });
}());
