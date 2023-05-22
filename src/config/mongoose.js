const mongoose = require('mongoose');
const logger = require('./../config/logger');
const { mongo, env } = require('./vars');

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
  logger.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// print mongoose logs in dev env
if (env === 'development') {
  mongoose.set('debug', true);
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = () => {
  // mongoose.createConnection(uri, { poolSize: 4 });
  mongoose
    .connect(mongo.uri, {
      poolSize: 10,
      useCreateIndex: true,
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => logger.info('mongoDB connected...'));
  return mongoose.connection;
};

/**
 * Disconnect from MongoDB
 *
 * @public
 */
exports.disconnect = () => {
  mongoose.connection.close(() => {
    logger.info('MongoDB disconnected...');
    process.exit(0);
  });
};
