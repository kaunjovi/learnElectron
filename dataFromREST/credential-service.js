'use strict';

angular.module('myApp').factory('CredentialService', ['$http', '$q', function ($http, $q) {

    var REST_SERVICE_URI = 'http://localhost:8080/credential';

    var factory = {
        fetchAllCredentials: fetchAllCredentials
        // createUser: createUser,
        // updateUser: updateUser,
        // deleteUser: deleteUser
    };

    return factory;

    function fetchAllCredentials() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching credentials.');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
}])