var nickflick = angular.module('nickflick', ['ui.router']);

nickflick.config(function($stateProvider) {
	
	$stateProvider.state('home', {
		url: '',
		views: {
			'header': {
				templateUrl: 'partials/head.html',
			},
			'body': {
				templateUrl: 'partials/home.html',
			},
		}
	});
	
	$stateProvider.state('movies', {
		url: '/movies',
		views: {
			'header': {
				templateUrl: 'partials/head.html',
			},
			'body': {
				templateUrl: 'partials/movies.html',
				controller: 'MoviesCtrl'
			},
		}
	});
});