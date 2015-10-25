import angualr from 'angular';

angualr.module('app', ['ui.router'])
  .controller('HomeCtrl', ($scope)=> {
    $scope.name = '测试项目';
  });





