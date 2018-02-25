var app = angular.module('TaskManagerApp', []);

app.controller('mainCtrl', function($http){
  this.hello = 'world';

  var vm = this;
  var get_buckets_request = {
    url: 'https://fierce-coast-28247.herokuapp.com/buckets',
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MTk1MjMzODh9.roTt5i-nXmhqP6HuNiAuxRIgX-zdPw825yB1p_Vg1V4'
    }
  };

    
  $http(get_buckets_request).then(function(response) {
    vm.buckets = response.data;
    console.log(response.data);
  })
  this.fruits = ['apple', 'orange', 'grape'];

});

app.filter('makePlural', function() {
  return function(input) {
    return input + 's';
  }
});
