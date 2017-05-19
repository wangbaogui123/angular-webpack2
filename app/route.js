module.exports = function(ngModule){

    ngModule.run(['$rootScope', '$window', '$location', '$log','$templateCache','$cacheFactory', function ($rootScope, $window, $location, $log,$templateCache,$cacheFactory) {  

          $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);  

          function stateChangeSuccess($rootScope) { 
              $templateCache.removeAll(); 
              $window.scrollTo(0,0);

          } 

          $rootScope.cache = $cacheFactory('myCache');

          $rootScope.cache.removeAll();

          
    }]).config(['$urlRouterProvider','$locationProvider','$stateProvider',function($urlRouterProvider,$locationProvider,$stateProvider) {

        $locationProvider.hashPrefix(''); 

          $urlRouterProvider
            .otherwise('/home');
            $stateProvider
                // home
                .state('home', {
                    url: '/home',
                    templateUrl: 'view/home.html',
                    reload:true,
                    cache:false, 
                    controller:'homeContr'
                })
                .state('linkpage', {
                    url: '/linkpage',
                    templateUrl: 'view/linkpage.html',
                    reload:true, 
                    controller:'pageContr'
                })
                .state('price', {
                    url: '/price',
                    templateUrl: 'view/price.html',
                    reload:true, 
                    controller:'linkedPrice'

                })
                .state('linkactive', {
                    url: '/linkactive',
                    templateUrl: 'view/linkactive.html',
                    reload:true, 
                    controller:'linkactive'

                })
                .state('page404', {
                    url: '/page404',
                    templateUrl: 'view/404.html',
                    reload:true, 
                    controller:'linkedfind'

                })
                .state('join_us', {
                    url: '/join_us/{hash}',
                    templateUrl: 'view/join_us.html',
                    reload:true, 
                    controller:'joinContr'

                })
                .state('service', {
                    url: '/service',
                    templateUrl: 'view/service.html',
                    reload:true,
                    controller:'serviceContr'
                })
                .state('hide', {
                    url: '/hide',
                    templateUrl: 'view/hide.html',
                    reload:true,
                    controller:'serviceContr'
                })

	                   

	}]);
	
}
