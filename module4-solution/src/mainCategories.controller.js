(function(){
  'use strict';
  angular.module('MenuApp')
  .controller("MainCategoriesController",MainCategoriesController)


  // CategoriesController.$inject=['MenuDataService','items']
  // function CategoriesController(MenuDataService,items){
  //   var categories=this;
  //   categories.items=items;
  // }

  MainCategoriesController.$inject=['MenuDataService','categoriesData']
  function MainCategoriesController(MenuDataService,categoriesData){
    var categories=this;
    categories.items=categoriesData;
  }

})();
