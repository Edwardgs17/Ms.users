const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const log4js = require('log4js');
const UsersRoutes = require('./App/src/Routes/UsersRoutes');
const ErroreHandlerMiddleware = require('./App/src/Utils/ErrorHandler');

const logger = log4js.getLogger('Users');

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at: Promise', promise, 'reason:', reason);
  logger.error(reason.stack);
});

class Server {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use(UsersRoutes);
    this.app.use(ErroreHandlerMiddleware.MainHandler);
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('SERVER ON PORT ', this.app.get('port'));
    });
  }
}

const server = new Server();
server.start();

module.exports = server;
