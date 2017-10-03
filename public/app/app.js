var app = angular.module('App', ['ui.router', 'ui.bootstrap', 'myCtrls']);


app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/views/home.html',
                controller: 'lyricsCtrl'
            })
            .state('newArtist', {
                url: '/newartist',
                templateUrl: 'app/views/newArtist.html',
                controller: 'HomeCtrl'
            })
            .state('newRelease', {
                url: '/newrelease',
                templateUrl: 'app/views/newRelease.html',
                controller: 'musicCtrl'
            })
            .state('newSong', {
                url: '/newsong',
                templateUrl: 'app/views/newSong.html',
                controller: 'songCtrl'
            })
            .state('lyrics', {
                url: '/lyrics',
                templateUrl: 'app/views/lyrics.html',
                controller: 'lyricsCtrl'
            })
            .state('showsong', {
                url: '/showsong',
                templateUrl: 'app/views/showsong.html',
                controller: 'showSongCtrl'
            })
            .state('showartist', {
                url: '/showartist',
                templateUrl: 'app/views/showArtist.html',
                controller: 'showArtistCtrl'
            })
            .state('showvideo', {
                url: '/showvideo',
                templateUrl: 'app/views/showVideo.html',
                controller: 'videoCtrl'
            })

        $locationProvider.html5Mode(true);
    }])
    //4. you should be able to login and be persistent. auth user instead of giving a 404 error
    // .config(['$httpProvider', function($httpProvider) {
        //add the AuthInterceptor in the list of interceptors
        //use the interceptor to add on the token from the service factory
        // $httpProvider.interceptors.push('AuthInterceptor')
    // }]);