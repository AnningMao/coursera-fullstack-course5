(function() {
  'use strict';

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserService', 'MenuService','ApiPath']
  function MyInfoController(UserService, MenuService,ApiPath) {
    var myinfoctrl = this;
    myinfoctrl.basePath=ApiPath;
    myinfoctrl.isRegistered = UserService.getIsRegistered();
    myinfoctrl.user = UserService.getUserInfo();
    if (myinfoctrl.isRegistered) {

      MenuService.getMenuItemsByShortName(myinfoctrl.user['favoriteItem'])
        .then(function(response) {
          myinfoctrl.favouriteItem = response;
          console.log('aaaaaaaaa:',response);

        })


    }
  }
}());
