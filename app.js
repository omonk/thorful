var App = angular.module('App', []);


function formController($scope, $http) {
    $scope.formData = {};


    $scope.formSubmit = function() {
        $http({
            method: POST,
            url: '',
            data : $.param($scope.formData),
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(data) {
            console.log(data);

            if (!data.success) {

            } else {

            }
        })
    }
}
