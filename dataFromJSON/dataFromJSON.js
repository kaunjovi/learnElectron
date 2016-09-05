var app = angular.module('myApp', []);

app.controller('myCntrl', function ($scope , $http) {

    console.log('Hello world.');
    $scope.greetings = 'Hello world.';

    $http.get('./dataFromJSON.json')
        .success(function (data) {
            console.log(data.credentials);
            $scope.credentialCollection = data.credentials;
        });


}); 