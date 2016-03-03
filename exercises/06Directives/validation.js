(function () {
  angular.module('myApp', [])
  
  .controller('FormController', function () {
    var self = this;
    
    this.countries = [
      { key: 'DK', value: 'Denmark', region: 'Scandinavia'},
      { key: 'SE', value: 'Sweden', region: 'Scandinavia'},
      { key: 'NO', value: 'Norway', region: 'Scandinavia'},
      { key: 'UK', value: 'United Kingdom', region: 'UK'},
      { key: 'US', value: 'USA', region: 'North America'}
    ];
  })

})();