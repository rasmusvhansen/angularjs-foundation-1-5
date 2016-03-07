(function() {
  'use strict';
  angular.module('myApp', ['ngAnimate'])
    .component('tabs', {
      templateUrl: 'tabs.html',
      transclude: true,
      controller: function () {
        this.panes = [];
        this.addPane = function(pane) {
          if (!this.panes.length) {
            pane.active = true;
          }
          this.panes.push(pane);
        };
        
        this.select = function(pane) {
          this.panes.forEach(function (pane) { pane.active = false; });
          pane.active = true;
        };
      }
    })
    
    .component('pane', {
      templateUrl: 'pane.html',
      transclude: true,
      require: {
        tabsCtrl: '^^tabs'
      },
      bindings: {
        title: '@'
      },
      controller: function () {
        this.active = false;
        
        this.$onInit = function () {
          this.tabsCtrl.addPane(this);
        };
      }
    });
})();