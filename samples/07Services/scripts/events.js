(function () {
  angular.module('events', [])
  
  .controller('AController', function ($rootScope) {
    var ctrl = this;
    ctrl.sendMessage = function (message) {
      $rootScope.$emit('msg', message);
    };
  })
  
  .controller('BController', function ($rootScope) {
    var ctrl = this;
    ctrl.message = '';
    $rootScope.$on('msg', function (e, msg) {
      ctrl.message = msg;
    });
  });
})();

// events should be used sparingly. If there are a lot of events in a system, it can be difficult to reason about what is going on
// another way of communicating between controllers is to use a service that both controllers depend on.
// broadcast goes down, emit goes up. 
// $rootscope.$emit and $rootscope.$on can be used as a system wide event mechanism without having to broadcast through all scopes.
