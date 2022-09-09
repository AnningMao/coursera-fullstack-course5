(function() {
    'use strict';
    angular.module('Data')
      .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ["$http",'ApiBasePath']
    function MenuDataService($http,ApiBasePath) {
      var service = this;

      service.getAllCategories = function() {
        return $http({
          method: "GET",
          url: (ApiBasePath +"/categories.json")
        }).then(function(response) {
          return response.data;
        }, function(error) {
          console.log("GET Failure");
        });
      }



      service.getItemsForCategory = function(categoryShortName) {
        console.log('I get the short_name:',categoryShortName);
        return $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json"),
          params:{
            category:categoryShortName
          }
        }).then(function(response) {
          console.log("getItemsForCategory is :",response.data.menu_items)
          return response.data.menu_items;
        }, function(error) {
          console.log("GET Failure");
        });
      }
    }

})();
