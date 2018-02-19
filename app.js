var myApp = angular.module('myApp', []);
// MODULE

// CONTROLLERS
myApp.controller('mainController', function ($log, $scope, $filter) {

    console.log($log);
    $log.log("Hello.");
    $log.info("This is some information");
    $log.warn("Warning!");
    $log.debug("Debug information while writing my code");
    $log.error("This was an error!");
    console.log($scope);

    $scope.name = 'Dylan';

    $scope.formattedname = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info($scope.formattedname);



    // console.log($scope);
    // $scope.name = 'Dylan jackson';
    // $scope.occupation = "Coder";
    // $scope.getname = function(){
    //     return 'Dylan jackson';
    // }

    // console.log($scope);
});



var searchPeople = function(firstname, lastname, height, age, occupation){
    return ' Dylan Jackson ';
}
console.log(angular.injector().annotate(searchPeople)); // Find all parmeters expected, and return them in an array 



// var searchPeopleString = searchPeople.toString();
// console.log(searchPeopleString);