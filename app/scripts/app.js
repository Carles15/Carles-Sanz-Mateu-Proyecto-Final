'use strict';

/**
 * @ngdoc overview
 * @name proyectofinal3App
 * @description
 * # proyectofinal3App
 *
 * Main module of the application.
 */
angular.module('proyectofinal3App', ['ngAnimate','ngAria','ngCookies','ngMessages','ngResource','ngRoute','ngSanitize','ngTouch','ngMaterial'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/flex', {
        templateUrl: 'views/flex.html',
        controller: 'FlexCtrl'
      })
      .when('/grid', {
        templateUrl: 'views/grid.html',
        controller: 'GridCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
