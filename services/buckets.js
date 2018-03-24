app.service('bucketService', function($http){
  var get_buckets_request = {
    url: 'https://fierce-coast-28247.herokuapp.com/buckets',
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MjA3MjUwMTJ9.Ze3WWRDjxlNjMQOLVJV8IAw7hNNQDVrsEts_VXdj-Qs'
    }
  };

  this.getBuckets = function(){
    return $http(get_buckets_request);
  };
});
