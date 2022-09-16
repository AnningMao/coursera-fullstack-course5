(function() {
  'use strict';

  angular.module('common')
    .service('UserService', UserService);
  UserService.$inject = ['$http', 'ApiPath'];

  function UserService($http, ApiPath) {
    var $service = this;
    var user;

    $service.register = function(userInfo) {
      user = userInfo;
      // console.log(user);
    }

    $service.getIsRegistered = function() {
      if (user) {
        return true;
      }
      return false;
    }

    $service.getUserInfo = function() {
      return user;
    }
  }
}());
