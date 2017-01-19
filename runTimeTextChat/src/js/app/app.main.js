var app = angular.module('myApp', ['ngResource', 'ngProgress', 'ngAnimate', 'toaster']);
app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('myHttpInterceptor');
});

// Handle http server errors
app.factory('myHttpInterceptor', function ($q,toaster) {
    return {
        responseError: function (response) {
          console.log(response);
          if(response.data){
            if(response.data.message)
            toaster.error("Error: ", response.data.message);
            else
            toaster.error("Error: ", response.data);
          }
          return $q.reject(response);
        }
    };
});

// Showing loading indicator on top while data is requested from database
app.directive('loading',   ['$http', 'ngProgress', function ($http, ngProgress)
{
    return {
        restrict: 'A',
        link: function (scope, elm, attrs)
        {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading, function (v)
            {
                if(v){
                    ngProgress.start();
                }else{
                    ngProgress.complete();
                }
            });
        }
    };
}]);

// Create a resource factory to access products table from database 
app.factory('Product', function($resource) {
  return $resource('/api/albumlist/:id', { id: '@_id' }, {
    update: { // We need to define this method manually as it is not provided with ng-resource
      method: 'PUT'
    }
  });
});

app.controller('ProductsCtrl', function($scope, Product, ngProgress, toaster) {

$scope.product = new Product();

var refresh = function() {
  $scope.products = Product.query(); 
  $scope.product ="";
}
refresh();

$scope.add = function(product) {
  Product.save(product,function(product){
    refresh();
  });
};

$scope.update = function(product) {
  product.$update(function(){
    refresh();
  });
};

$scope.remove = function(product) {
  product.$delete(function(){
    refresh();
  });
};

$scope.edit = function(id) {
  $scope.product = Product.get({ id: id });
};  

$scope.deselect = function() {
  $scope.product = "";
}

})