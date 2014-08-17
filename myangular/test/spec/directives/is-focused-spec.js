'use strict';

describe('isFocused directive', function () {
    var scope;
    var compile;
    var timeout;

    beforeEach(module('directives.isFocused'));

    beforeEach(inject(function($rootScope, $compile, $timeout) {
        scope = $rootScope.$new();
        scope.shouldFocus = false;
        compile = $compile;
        timeout = $timeout;

        this.addMatchers({
            toHaveFocus: function () {
                this.message = function () {
                    return 'Expected \'' + angular.mock.dump(this.actual) + '\' to have focus';
                };

                return document.activeElement === this.actual[0];
            }
        });
    }));

    var setUpTestInputElement = function(elementScope){
        var htmlWithDirective = '<input type="text" is-focused = "shouldFocus"/>';
        var element = angular.element(htmlWithDirective);
        element.appendTo(document.body);
        compile(element)(elementScope);

        return element;
    };

    it('should focus on the input field if isFocused is set to true', function () {
        var element = setUpTestInputElement(scope);

        scope.shouldFocus = true;
        scope.$digest();

        expect(element).toHaveFocus();
    });

    it('should NOT focus on the input field if isFocused is set to false', function () {
        var element = setUpTestInputElement(scope);

        scope.shouldFocus = false;
        scope.$digest();

        expect(element).not.toHaveFocus();
    });

    it('should set isFocused to true when field is focused', function () {
        expect(scope.shouldFocus).toBe(false);
        var element = setUpTestInputElement(scope);

        element.focus();
        timeout.flush();

        expect(scope.shouldFocus).toBe(true);
    });

    it('should set isFocused to false when field loses focus', function () {
        var element = setUpTestInputElement(scope);
        scope.shouldFocus = true;

        element.blur();
        timeout.flush();

        expect(scope.shouldFocus).toBe(false);
    });
});
