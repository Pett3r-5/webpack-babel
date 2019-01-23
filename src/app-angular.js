import angular from "angular"
import "angular-ui-router"


let app = angular.module('indexExemplo', ['ui.router', 'ngRoute'])
.run(function ($rootScope) {
  'ngInject'
  // $rootScope.muda = function () {
  //   $rootScope.$broadcast('muda-cor')
  // }

})
.config(function($stateProvider, $locationProvider, $routeProvider){
  'ngInject'
  $locationProvider.hashPrefix('!');

  // $stateProvider.state('base', {
  //   baseUrl: './base.html',
  //   route: '/base',
  //   controller: 'base as vm',
  //   data: {
  //     auth: true
  //   }
  // })
  $routeProvider
  .when("/base", {templateUrl: './base.html', controller: "base as vm"})
  .otherwise({redirectTo: '/unauthorized'});
})

export default app
