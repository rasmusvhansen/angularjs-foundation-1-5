(function() {
  angular.module('myApp', []).directive('myFrame', function() {
    return {
      scope: {},
      restrict: 'E',
      transclude: true,
      template: '<div class="{{class}}"><div ng-transclude></div></div>',
      link: function(scope, element, attrs) {
        scope.class = attrs.className || 'frame';
      }
    };
  });
})();