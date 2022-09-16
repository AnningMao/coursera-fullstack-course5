(function() {
  'use strict';
  angular.module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['UserService','MenuService'];

  function SignupController(UserService,MenuService) {
    var $ctrl = this;


    $ctrl.register = function() {
      MenuService.getMenuItemsByShortName($ctrl.favoriteItem).then(
        function(response) {
          console.log("what I get is:", response);
          if (response) {
            UserService.register({
                    firstName: $ctrl.firstname,
                    lastName: $ctrl.lastname,
                    email: $ctrl.email,
                    phone: $ctrl.phoneNumber,
                    favoriteItem: $ctrl.favoriteItem
                  });
            $ctrl.isRegistered = true;
            $ctrl.itemExist = true;
          } else {
            $ctrl.isRegistered = false;
            $ctrl.itemExist = false;
          }
        }
      )
    }

   $ctrl.$onInit=function(){
            $ctrl.itemExist = true;
            $ctrl.isRegistered = false;
   }

  }

})();
