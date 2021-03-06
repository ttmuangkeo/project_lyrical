angular.module('myCtrls', ['somethingServices'])
    .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.search = function() {
            $http({
                url: 'https://itunes.apple.com/search?term=' + $scope.artist,
                params: {
                    limit: 10
                }
            }).then(function succes(req) {
                $scope.test = req.data.results;
            }).catch(function error(err) {
                console.log(err);
            });
        };
    }])
    .controller('songCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.search = function() {
            $http({
                url: 'https://itunes.apple.com/search?term=' + $scope.artist,
                params: {
                    'limit': 6,
                }
            }).then(function succes(req) {
                $scope.test = req.data.results;
            }).catch(function error(err) {
                console.log('what is the erro', err);
            });
        };
    }])
    .controller('musicCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.search = function() {
            $http({
                url: 'https://itunes.apple.com/search?term=' + $scope.artist + '&entity=musicVideo'
            }).then(function success(req) {
                $scope.test = req.data.results
            }).catch(function error(err) {
                console.log('give me an error baby..', err)
            });
        };
    }])
    .controller('lyricsCtrl', ['$scope', '$http', function($scope, $http) {


        $scope.search = function() {
            $http({
                url: 'https://itunes.apple.com/search?term=' + $scope.artist,
                params: {
                    'limit': 6
                }
            }).then(function succes(req) {
                $scope.songInfo = req.data.results[0];
            }).catch(function error(err) {
                console.log(err);
            });
            $http({
                url: 'https://api.musixmatch.com/ws/1.1/matcher.lyrics.get',
                'params': {
                    'format': 'json',
                    'callback': 'callback',
                    'q_track': $scope.artist,
                    'q_artist': $scope.title,
                    'apikey': 'fdc9ad9d9fa9d41f48a88a72c770f024',
                }
            }).then(function success(req) {
                var lyrics = [];
                if (req.status === 200) {
                    var items = req.data.message.body.lyrics.lyrics_body;
                    lyrics.push(items);
                    $http({
                        url: '/api/emoji',
                        params: {
                            searchTerm: lyrics
                        }
                    }).then(function success(res) {
                        $scope.emoji = res.data
                    }).catch(function error(err) {
                        console.log('err', err);
                    });
                }
                $scope.lyrics = req.data.message.body.lyrics;
            }).catch(function error(err) {
                console.log('error bro.', err);
            });
        };
    }])

    .controller('showSongCtrl', ['$scope', '$http', function($scope, $http) {
        var emptyString = "";
        var alphabet = "abcdefghijklmnopqrstuvwxyz";

        while (emptyString.length < 2) {
            emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        $http({
            url: 'https://itunes.apple.com/search?term=' + emptyString,
            params: {
                'entity': 'musicTrack'
            }
        }).then(function success(req) {
            $scope.test = req.data.results;
        }).catch(function error(req) {
            console.log('error', req);
        });
    }])
    .controller('showArtistCtrl', ['$scope', '$http', function($scope, $http) {
        var emptyString = "";
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        while (emptyString.length < 2) {
            emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        $http({
            url: 'https://itunes.apple.com/search?term=' + emptyString,
            params: {
                'entity': 'album',
                limit: 10
            }
        }).then(function success(req) {
            console.log(req);
            $scope.test = req.data.results;
        }).catch(function error(req) {
            console.log('error', req);
        });
    }])
    .controller('videoCtrl', ['$scope', '$http', function($scope, $http) {
        var emptyString = "";
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        while (emptyString.length < 2) {
            emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        $http({
            url: 'https://itunes.apple.com/search?term=' + emptyString,
            params: {
                'entity': 'musicVideo',
                'limit': 10,
            }
        }).then(function success(req) {
            $scope.test = req.data.results;
        }).catch(function error(err) {
            console.log(err);
        });
    }]);