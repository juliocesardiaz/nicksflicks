nickflick.controller('MoviesCtrl', function MoviesCtrl($scope, MoviesFactory) {
	$scope.movies = MoviesFactory.movies;
	$scope.MoviesFactory = MoviesFactory;
	$scope.movie = $scope.movies[0];
	
	$scope.displayMovie = function(element) {
		$scope.movie = $scope.movies[element];
	}
});