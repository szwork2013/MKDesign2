'use strict';

angular.module('MKDesignApp')
  .controller('CheckoutCtrl', function ($scope, basket) {
    $scope.basket = basket;
    console.log("Pelle");
  });