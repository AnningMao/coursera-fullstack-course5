(function(){
  'use strict';
  angular.module('MenuApp')
  .controller("MainItemsController",MainItemsController)

  MainItemsController.$inject=['MenuDataService','itemsData']
  function MainItemsController(MenuDataService,itemsData){
    var mainItems=this;
    mainItems.items=itemsData;
  }

})();
