var app = angular.module('TaskManagerApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('buckets', {
      url: '/buckets',
      template: 'index.html'
    });
});

app.controller('mainCtrl', function(bucketService){
  var vm = this;

  bucketService.getBuckets();
});

