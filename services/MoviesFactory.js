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
		{
				movieTitle: "Sicario",
				movieReview: "An unforgettable motion picture that should be on the must-see list for anyone who appreciates films that deal in grays rather than blacks and whites",
				id: 3,
		},
		{
				movieTitle: "Black Mass",
				movieReview: "It's Depp's best work in years, suggesting that maybe his insistence on hiding behind heavy makeup and wigs in almost every recent role has not been the problem.",
				id: 4,
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