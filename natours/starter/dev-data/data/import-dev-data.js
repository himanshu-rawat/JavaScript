// const fs = require('fs');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Tour = require('../../models/tourModel');

// dotenv.config({ path: './config.env' });

// const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// mongoose
// 	.connect(DB, {
// 		useNewUrlParser: true,
// 		useCreateIndex: true,
// 		useFindAndModify: false,
// 		useUnifiedTopology: true
// 	})
// 	.then(console.log('DB Connections Successfull!'))
// 	.catch((err) => {
// 		console.log(`DB Connection Error: ${err.message}`);
// 	});

// console.log(arguments);
// // Read JSON file which is in current directory.
// const tours = JSON.parse(fs.readFileSync(`${__dirname}\\tours-simple.json','utf-8`));

// // Import Data into Database.
// const importData = async () => {
// 	try {
// 		await Tour.create(tours);
// 		console.log('Data Successfully Loaded');
// 	} catch (error) {
// 		console.log(`Error :${error}`);
// 	}
// };

// // Delete all data from collection/db
// const deleteData = async () => {
// 	try {
// 		await Tour.deleteMany();
// 		console.log('Data Successfully Deleted');
// 	} catch (error) {
// 		console.log(`Error :${error}`);
// 	}
// };

// console.log(process.argv);
