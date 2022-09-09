(function() {


  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.template.html'
      })


      // Premade list page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/templates/main-categories.template.html',
        controller: 'MainCategoriesController as mainCategories',
        resolve: {
          categoriesData: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('items', {
        url: '/items/{categoryShortName}',
        templateUrl: 'src/templates/main-items.template.html',
        controller: 'MainItemsController as mainItems',
        resolve: {
          itemsData: ['$stateParams','MenuDataService', function($stateParams,MenuDataService) {
            console.log('$stateParams.categoryShortNam is:',$stateParams.categoryShortName);
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }

      });

  }


})();


// Item detail
