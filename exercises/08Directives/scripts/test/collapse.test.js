(function() {
  var scope,
    collapse,
    button,
    elements;
  describe('collapse', function() {
    beforeEach(module('collapse'));
    beforeEach(inject(function($rootScope, $compile) {
      scope = $rootScope.$new();
      scope.collapsed = false;
      elements = $compile('<div><button ng-click="collapsed = !collapsed">Toggle</button>' + '<div collapse="collapsed"><p>My collapsible content</p></div>' + '</div>')(scope);
      scope.$digest();
      button = elements.find('button');
      collapse = elements.find('.collapse');
    }));
    
    it('should add collapse class to collapsible', function() {      
      expect(collapse.length).toBe(1);
    });
    
    it('should be expanded to begin with', function() {          
      expect(collapse).toHaveClass('expanded');
    });
    
    it('should collapse on button click', function() {
      expect(collapse).toHaveClass('expanded');
      button.click();                  
      expect(collapse).not.toHaveClass('expanded');
    });
    
    it('should reopen on second button click', function() {
      button.click();               
      expect(collapse).not.toHaveClass('expanded');
      
      button.click();   
      expect(collapse).toHaveClass('expanded');
    }); 
  });
})();