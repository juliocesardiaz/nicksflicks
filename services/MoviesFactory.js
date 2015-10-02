nickflick.factory('MoviesFactory', function MoviesFactory() {
	var factory = {};
	factory.movies = [];
	factory.addMovies = function() {
		factory.movies.push(
			{
				movieTitle: factory.movieTitle,
				movieReview: factory.movieReview,
				id: factory.movies.length + 1,
			}
		);
		factory.movieTitle = null;
		factory.movieReview = null;
	};
	return factory;
});