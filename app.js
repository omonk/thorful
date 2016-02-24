'use strict';

angular.module('App', [])
    .controller('formController', function($scope, $http) {
        $scope.$watch('search', function(initialVal, newVal) {
            if(newVal !== initialVal) {
                fetch();
            }
        })

        $scope.search = '';

        $scope.details = null;

        function fetch() {
            $http.get('https://api.github.com/search/repositories?q=' + $scope.search)
            .then(function(response) {
                $scope.details = response.data
            })
        }

        $scope.update = function(repo) {
            $scope.search = repo.name;
        }

        // $scope.select = function () {
        //     this.setSel
        // }
    })
