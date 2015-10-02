nickflick.factory('MoviesFactory', function MoviesFactory() {
	var factory = {};
	factory.movies = [
		{
				movieTitle: "The Martian",
				movieReview: "The Martian plays to both Scott's strengths and weaknesses. By relegating Mark's predicament to a purely survivalist scenario, he keeps things humming along without ever widening the horizon. But there was an obligation to widen the horizon.",
				id: 1,
		},
		{
				movieTitle: "Everest",
				movieReview: "The film only seems to come to life when showing how challenging is the climb and how unpredictable and harsh      mother nature can be.",
				id: 2,
		},
	];
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