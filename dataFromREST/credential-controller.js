'use strict';
 
angular.module('myApp').controller('CredentialController', ['$scope', 'CredentialService', function($scope, CredentialService) {
    var self = this;
    // self.user={id:null,username:'',address:'',email:''};
    self.credentials=[];
 
    // self.submit = submit;
    // self.edit = edit;
    // self.remove = remove;
    // self.reset = reset;
 
 
    fetchAllCredentials();
 
    function fetchAllCredentials(){
        CredentialService.fetchAllCredentials()
            .then(
            function(data) {
                self.credentials = data;
            },
            function(errResponse){
                console.error('Error while fetching credentials.');
            }
        );
}}])