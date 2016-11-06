(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.check = function () {
    if (!$scope.food)
    {
      $scope.message = 'Please enter data first';
      $scope.messageStyle = "red";
      $scope.inputStyle = "invalid";
    }
    else {
      $scope.messageStyle = "green";
      $scope.inputStyle = "valid";

      var items = $scope.food.split(',');
      var realItems = 0;

      for (var i = 0; i < items.length; ++i) {
        if(items[i].trim())
        {
          realItems++;
        }
      }

      if (realItems<=3) {
        $scope.message = 'Enjoy!';
      }
      else {
        $scope.message = 'Too much!';
      }
    }
  };

}

})();
