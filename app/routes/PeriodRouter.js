var Period = require('../models/period');

module.exports = function(app) {

	app.post('/add/year/goals', function(req, res) {
		Period.findOne({
			username: 'valentin'
		}, function(err, year) {
			if (err) {
				res.send(err);
			} else {
				if (!year) {
					year = new Period({
						goals: req.body.goals,
						username: 'valentin'
					});
				} else {
					year.goals = req.body.goals;
				}

				year.save(function(err) {
					if (err) {
						res.send(err);
					} else {
						res.send(year.goals);
					}
				})
			}
		})
	});

	app.get('/get/year/goals', function(req, res) {
		Period.findOne({
			username: 'valentin'
		}, function(err, year) {
			if (err) {
				res.send(err);
			} else {
				res.send(year.goals);
			}
		});
	});
	app.post('/add/week/goals', function(req, res) {
		Period.findOne({
			username: 'valentin'
		}, function(err, week) {
			if (err) {
				res.send(err);
			} else {
				if (!week) {
					week = new Period({
						weekgoals: req.body.goals,
						username: 'valentin'
					});
				} else {
					week.weekgoals = req.body.goals;
				}

				week.save(function(err) {
					if (err) {
						res.send(err);
					} else {
						res.send(week.weekgoals);
					}
				})
			}
		})
	});

	app.get('/get/week/goals', function(req, res) {
		Period.findOne({
			username: 'valentin'
		}, function(err, week) {
			if (err) {
				res.send(err);
			} else {
				res.send(week.weekgoals);
			}
		});
	});
};

