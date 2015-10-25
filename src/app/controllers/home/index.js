export default angular.module('app.controllers.home', [])
  .controller('home.main', require('./mainController'))
  .controller('home.detail', require('./detailController'))
  .name;
