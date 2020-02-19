const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then(console.log('DB Connections Successfull!'))
	.catch((err) => {
		console.log(`DB Connection Error: ${err.message}`);
	});

// Starting The Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on Ports  ${port}`);
});
