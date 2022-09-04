(function(){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyListController',ToBuyListController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyListController.$inject=['ShoppingListCheckOffService'];
function ToBuyListController(ShoppingListCheckOffService){
  var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getItems("tobuy");

    toBuyList.checkoffItem = function (itemIndex) {
      ShoppingListCheckOffService.checkoffItem(itemIndex);
    };
  }

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getItems("bought");

  }

  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var boughtList = [];
    var toBuyList=[
      {
        name:"Milk",
        quantity:"2"
      },
      {
        name:"Donuts",
        quantity:"2"
      },
      {
        name:"Milk",
        quantity:"2"
      },
      {
        name:"Cookies",
        quantity:"2"
      },
      {
        name:"Peanut Butter",
        quantity:"2"
      },
      {
        name:"Peanut Butter",
        quantity:"2"
      },
      {
        name:"Peanut Butter",
        quantity:"2"
      },
      {
        name:"Peanut Butter",
        quantity:"2"
      }
    ];

    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      boughtList.push(item);
    };

    service.checkoffItem = function (itemIndex) {
      var checkedoffItem=toBuyList.splice(itemIndex, 1);
      if (checkedoffItem!=[]){
            service.addItem(checkedoffItem[0].name,checkedoffItem[0].quantity);
      }


    };

    service.getItems = function (whichList) {
      switch (whichList) {
        case 'tobuy':
          return toBuyList;
          break;
        case 'bought':
          return boughtList;
          break;

        default:
        return "no such list"
      }
    };


    service.sayHello = function () {
console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa");
    };
  }



})();
