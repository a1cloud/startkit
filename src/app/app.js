import angualr from 'angular';

angualr.module('app', [])
  .controller('HomeCtrl', ($scope)=> {
    $scope.name = '测试项目';
  });





