/**
 * Created by you on 2/12/2015.
 */

var controllers = angular.module("Mycontrollers", []);


//---------------------------------------Navbar controllers -----------------------------------//

controllers.controller("homecontroller", function($scope, $state){
 console.log("home controller called");


    $scope.displayChauffer = function()
    {
        $state.go("servicesView.chauffer");
    }

    $scope.displayEntertainment = function()
    {
        $state.go("servicesView.entertainment");
    }

    $scope.displayMobile = function()
    {
        $state.go("servicesView.mobile");
    }

    $scope.displayRefreshment = function()
    {
        $state.go("servicesView.refreshment");
    }



    $scope.goBack = function()
    {
        $state.go("home");
    }
});

controllers.controller("aboutcontroller", function($scope){
    console.log("about controller called");

});

//----------------------------Services Controllers ---------------------------------------------//

controllers.controller("chauffercontroller", function($scope){
    console.log("chauffer controller called");

});

controllers.controller("mobilecontroller", function($scope){
    console.log("mobile controller called");

});

controllers.controller("entertainmentcontroller", function($scope){
    console.log("entertainmnent controller called");

});

controllers.controller("refreshmentcontroller", function($scope, $http, $state){
    console.log("refreshment controller called");

    var successFunction = function(data)
    {
        $scope.foodlist = data;
    }
    var errorFunction = function(error)
    {
        console.log("Error");
    }

    $http.get("js/data.json").success(successFunction).error(errorFunction);


    $scope.goBack = function()
    {
        $state.go("home");
    }
});


controllers.controller("citiescontroller", function($scope, $http){
    console.log("cities controller called");

    var successFunction = function(data)
    {
        $scope.citiesdata = data;
    }
    var errorFunction = function(error)
    {
        console.log("Error");
    }

    $http.get("js/data.json").success(successFunction).error(errorFunction);


});






