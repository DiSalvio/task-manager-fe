function BucketsListController(bucketService) {
  var vm = this;
  bucketService.getBuckets().then(function(response) {
    vm.buckets = response.data;
  });
}

app.component('bucketsList', {
  templateUrl: 'buckets-list/buckets-list.html',
  controller: BucketsListController,
  controllerAs: 'vm',
  bindings: {
    buckets: '<'
  }
});
