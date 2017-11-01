(function () {
  'use strict';
  var app = angular.module("app", ['ngSanitize', 'ngRoute']); //startup

  //Home Controller
  function HomeCtrl($scope, $log, $http)
  {
    $log.info("HomeCtrl loading...")
    var me = this;
    $http.get('http://sc9test/sitecore/layoutsvc/render/jss?item=/')
    .then(function(response) {
        me.model = response.data;
    });
  }

  //About Controller
  function AboutCtrl($scope, $log, $http)
  {
    $log.info("AboutCtrl loading...")
    var me = this;
    $http.get('http://sc9test/sitecore/layoutsvc/render/jss?item=/About%20Us')
    .then(function(response) {
        me.model = response.data;
    });
  }

  HomeCtrl.$inject = ["$scope", "$log", "$http"];
  AboutCtrl.$inject = ["$scope", "$log", "$http"];
  app.controller("HomeCtrl", HomeCtrl);
  app.controller("AboutCtrl", AboutCtrl);
})();
