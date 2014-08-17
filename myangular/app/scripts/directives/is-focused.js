(function () {
    'use strict';

    var theModule = angular.module('directives.isFocused', []);

    theModule.directive('isFocused', function () {
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
                        scope.$apply(attrs.isFocused + '=false');

                });
                element.bind('focus', function () {
                    console.log('focus in directive. attrs.isFocused=' + attrs.isFocused);

                    scope.$apply(attrs.isFocused + '=true');

                });
            }
        };
    });
}());
