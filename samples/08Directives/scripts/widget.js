(function() {
  'use strict';
  angular.module('myApp', []).directive('myColorWidget', function($timeout) {
    return {
      restrict: 'E',
      template: '<div class="widget"></div>',
      link: function(_, element, attrs) {
        element.on('mousemove', function(e) {
          var x = e.clientX;
          var y = e.clientY;
          var el = angular.element('<div class="emitted"></div>');
          var color = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
          el.css('top', y + 'px');
          el.css('left', x + 'px');
          el.css('border-color', color);
          element.append(el);
          $timeout(el.remove.bind(el), 500);
        });
      }
    };
  });
})();
