var Scheduler = require('../models/scheduler');

module.exports = function(app) {

	app.get('/auth', function(req, res){
		console.log('auth');

		res.send("test Correct");
	});


	app.post('/add/schedule', function(req, res) {

		Scheduler.findOne({
			username: 'valentin'
		}, function(err, scheduler) {
			if (err) {
				res.send(err);
			} else {
				if (!scheduler) {

					scheduler = new Scheduler({
			            times: [{
			            	id: req.body.id,
			            	text: req.body.text
			            }],
			            username: 'valentin'
			        });
				} else {
					scheduler.times.push({
						id: req.body.id,
		            	text: req.body.text
					});
				}

		        scheduler.save(function(err){
		            if(err) {
		                res.send(err);
		            } else {
		            	res.send(scheduler);
		            }
		        });
			}
		});

	});

	app.post('/update/schedule', function(req, res) {

		Scheduler.findOne({
			username: 'valentin'
		}, function(err, scheduler) {
			if (err) {
				res.send(err);
			} else {
				if (scheduler) {
						
					scheduler.times = req.body.times;

			        scheduler.save(function(err){
			            if(err) {
			                res.send(err);
			            } else {
			            	res.send(scheduler);
			            }
			        });
	    		}
			}
		});
	});

	app.delete('/delete/schedule', function(req, res) {

		Scheduler.findOne({
			username: 'valentin'
		}, function(err, scheduler) {
			if (err) {
				res.send(err);
			} else {
				if (!scheduler) {
					res.send("You don't have scheduler!");
				} else {
					
					var times = scheduler.times
					for (var i = 0; i < scheduler.times.length; i++) {
						
						if ( scheduler.times[i].id === req.body.id ) {
							scheduler.times.splice(i, 1);	
					        break;
						}					
					}	

			        scheduler.save(function(err, _scheduler){
			            if(err) {
			                res.send(err);
			            } else {
			            	res.send(_scheduler);
			            }
			        });
				}
			}
		});
	});

	app.put('/edit/schedule', function(req, res) {
		
		Scheduler.findOne({
			username: 'valentin'
		}, function(err, scheduler) {
			if (err) {
				res.send(err);
			} else {
				if (!scheduler) {
					res.send("You don't have scheduler!");
				} else {
					
					var times = scheduler.times
					for (var i = 0; i < scheduler.times.length; i++) {
						
						if ( scheduler.times[i].id === req.body.id ) {
							scheduler.times[i].text = req.body.text;	
					        break;
						}					
					}	

			        scheduler.save(function(err, _scheduler){
			            if(err) {
			                res.send(err);
			            } else {
			            	res.send(_scheduler);
			            }
			        });
				}
			}

		});

	});


	app.get('/get/scheduler', function(req, res) {
		Scheduler.find({
			username: 'valentin'
		}, function(err, result) {
			if (err) {
				res.send(err);
			} else {
				res.send(result);
			}
		});
	});
};

