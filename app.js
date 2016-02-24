'use strict';

var App = angular.module('App', []);

App.directive('searchBar', function() {
    return {
        restrict: 'AE',
        templateUrl: 'directives/searchBar.html'
    };
});

App.directive('repoItem', function () {
    return {
        restrict: 'AE',
        templateUrl: 'directives/repoItem.html'
    }
});


App.controller('formController', function($scope, $http) {
        $scope.$watch('search', function(initialVal, newVal) {
            // if(newVal !== initialVal) {
                fetchRepos();
            // }
        })

        $scope.search = 'Bootstrap';

        $scope.details = null;

        function fetchRepos() {
            $http.get('https://api.github.com/search/repositories?q=' + $scope.search)
            .then(function(response) {
                $scope.details = response.data;
            })
        }

        $scope.repoIssues;

        $scope.fetchRepoIssues = function(name, repoName) {
            $http.get("https://api.github.com/search/issues?q=repo:" + name + "/" + repoName)
            .then(function(response) {
                $scope.repoIssues = response.data;
            })
        }
    });
