(function() {
  angular.module('myApp', []).directive('isBlue', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.isBlue = function(modelValue, viewValue) {
          return !modelValue || modelValue === 'blue';
        };
      }
    };
  });
})();
// async validation is also possible. See http://www.yearofmoo.com/2014/09/taming-forms-in-angularjs-1-3.html#asnychronous-validation-via-asyncvalidators
// 
// 
