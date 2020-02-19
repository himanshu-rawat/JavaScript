const Tour = require('../models/tourModel');
const APIFeaturs = require('../utils/apiFeatures');

exports.aliasTopTours = async (req, res, next) => {
	// console.log('Hello From AliasTopTours');
	req.query.limit = '5';
	req.query.sort = '-ratingAverage,price';
	req.query.fields = 'name,price,ratingAverage,summary,difficulty';
	next();
};

exports.getAllTours = async (req, res) => {
	try {
		// Execute Query
		const features = new APIFeaturs(Tour.find(), req.query)
		.filter()
		.sort()
		.limitFields()
		.paginate();
		const tours = await features.query;

		// Send Response
		res.status(200).json({
			status: 'success',
			results: tours.length,
			data: {
				tours
			}
		});
	} catch (error) {
		res.status(404).json({
			status: 'fail',
			message: error
		});
	}
};
exports.getTour = async (req, res) => {
	try {
		const tour = await Tour.findById(req.params.id);
		res.status(200);
		res.json({
			status: 'success',
			data: {
				tour
			}
		});
	} catch (error) {
		res.status(404).json({
			status: 'fail',
			message: error
		});
	}
};

exports.createTour = async (req, res) => {
	// const newTour= new Tour({})
	// newTour.save();
	try {
		const newTour = await Tour.create(req.body);
		res.status(201).json({
			status: 'success',
			data: {
				tour: newTour
			}
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: error
		});
	}
};
exports.updateTour = async (req, res) => {
	try {
		const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		});
		res.status(200).json({
			status: 'success',
			data: {
				tour
			}
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: 'Invalid Data Sent'
		});
	}
	// res.status(200).json({ status: 'success', tour });
};
exports.deleteTour = async (req, res) => {
	try {
		await Tour.findByIdAndDelete(req.params.id);
		res.status(204).json({ status: 'success', data: null });
	} catch (error) {
		res.status(404).json({
			status: 'fail',
			message: error
		});
	}
};

exports.getTourStats = async (req, res) => {
	try {
		const stats = await Tour.aggregate([
			//Array Of Stages
			{
				$match: { ratingAverage: { $gte: 4.5 } }
			},
			{
				$group: {
					_id: { $toUpper: '$difficulty' },
					numberOfToursRatings: { $sum: '$ratingQuantity' },
					numberOfTours: { $sum: 1 },
					tourAvgRating: { $avg: '$ratingAverage' },
					tourAvgPrice: { $avg: '$price' },
					tourMinPrice: { $min: '$price' },
					tourMaxPrice: { $max: '$price' }
				}
			},
			{
				$sort: {
					tourAvgPrice: 1
				}
			}
			// {
			// 	$match: {
			// 		_id: { $ne: 'easy' }
			// 	}
			// }
		]);
		res.status(200).json({
			status: 'success',
			data: {
				stats
			}
		});
	} catch (error) {
		res.status(404).json({
			status: 'fail',
			message: error
		});
	}
};

exports.getMonthlyPlan = async (req, res) => {
	try {
		const year = req.params.year * 1; //2021
		const plan = await Tour.aggregate([
			{
				$unwind: '$startDates'
			},
			{
				$match: {
					startDates: {
						$gte: new Date(`${year}-01-01`),
						$lte: new Date(`${year}-12-31`)
					}
				}
			},
			{
				$group: {
					_id: { $month: '$startDates' },
					numberOfTourStarts: { $sum: 1 },
					tours: { $push: '$name' }
				}
			},
			{
				$addFields: { month: '$_id' }
			},
			{
				$project: {
					_id: 0
				}
			},
			{
				$sort: { numberOfTourStarts: -1 }
			},
			{
				$limit: 12
			}
		]);

		res.status(200).json({
			status: 'success',
			data: {
				plan
			}
		});
	} catch (error) {
		res.status(404).json({
			status: 'fail',
			message: error
		});
	}
};
