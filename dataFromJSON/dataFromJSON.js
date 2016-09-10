var app = angular.module('myApp', []);

app.controller('myCntrl', function ($scope, $http) {

    console.log('Hello world.');
    $scope.greetings = 'Hello world.';

    $scope.openAFile = function () {
        console.log('open a file.');
    };


    $http.get('./dataFromJSON.json')
        .success(function (data) {
            console.log(data.credentials);
            $scope.credentialCollection = data.credentials;
        });




}); 