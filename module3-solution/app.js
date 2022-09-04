(function() {
  'user strict';

  angular.module('NarrowItDownApp', [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .directive("foundItems", FoundItemsDirective)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.searchTerm = "";
    menu.noMatchEntry = false;
    menu.found = [];
    menu.getMatchedMenuItems = function() {

      var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
      promise.then(function(response) {
          if (menu.searchTerm.trim().length == 0 || response.length == 0) {
            menu.noMatchEntry = true;
            console.log("NarrowItDownController:Nothing found");
          } else {
            menu.noMatchEntry = false;
            menu.found = response;
            console.log("NarrowItDownController:I got Somthing:");
            console.log(menu.found);

          }

        })
        .catch(function(error) {
          console.log("Somthing went wrong");
        });
    }

    menu.removeItem=function(itemIndex){
      console.log("this is:", this);
      menu.found.splice(itemIndex,1);

    }
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath']

  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function getMatchedMenuItems(searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function(response) {
        // var foundItems = [];
        // for (var i in response.data.menu_items) {
        //   var menu_item = response.data.menu_items[i];
        //   if (menu_item.description.toLowerCase().indexOf(searchTerm) !== -1) {
        //     foundItems.push(menu_item);
        //   }
        // }
        // console.log("foundItems are as follow");
        // console.log(foundItems);
        // response.data.menu_items=foundItems;
        // return response;
        var foundItems = response.data.menu_items.filter(
          function(item) {
            return item.description.search(searchTerm) !== -1;
          }
        );
        console.log("MenuSearchService:foundItems are as follow:");
        console.log(foundItems);
        return foundItems;
      }, function(error) {
        console.log(error);
      }).catch(function(error) {
        console.log("MenuSearchService:Somthing went wrong");
      });
    }
  }


  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'directives/foundItems.html',
      scope: {
        items: '<attrItems',
        removeItem:'&onRemove'
      }
    };
    return ddo;
  }

})();
