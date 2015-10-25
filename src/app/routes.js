export default function routes($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise("/404");
  $stateProvider
    .state('main', {
      url: '',
      template: require('./views/home/main.html'),
      controller: 'home.main',
      controllerAs: 'vm'
    });

  $stateProvider
    .state('detail', {
      url: '/detail',
      template: require('./views/home/detail.html'),
      controller: 'home.detail',
      controllerAs: 'vm'
    });
}

routes.$inject = ['$stateProvider','$urlRouterProvider'];
