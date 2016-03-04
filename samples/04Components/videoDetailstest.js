describe('component: app', function() {
  var component, scope, video, $componentController;

  beforeEach(module('myApp'));

  beforeEach(inject(function($rootScope, _$componentController_) {
    scope = $rootScope.$new();
    $componentController = _$componentController_;
    video = {
      title: 'Terminator 2',
      link: 'theLink'
    };
  }));

  it('should inject the given video into the component', function() {
    // It's necessary to always pass the scope in the locals, so that the controller instance can be bound to it
    component = $componentController('videoDetails', {$scope: scope}, {video: video});

    expect(component.video).toEqual({
      title: 'Terminator 2',
      link: 'theLink'
    });
  });
});