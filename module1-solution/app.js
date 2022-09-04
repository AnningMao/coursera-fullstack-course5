(function(){
'user strict';

angular.module('LunchCheck',[]).controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
  $scope.count=$scope.inputString;
  $scope.message='';
$scope.showCheckResult=function(){
  if (typeof $scope.inputString ==undefined||$scope.inputString==null||$scope.inputString=='') {
        $scope.message = "Please enter data first";
  }
  else {
    if ($scope.inputString.split(',').length>3) {
      $scope.message = "Too much!";
    }
    else {
      $scope.message = "Enjoy!";
    }
  }

};


}


})();
