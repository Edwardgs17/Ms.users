
const UsersController = module.exports;
const log4js = require('../Utils/Logger');
const logUtils = require('../Utils/LogUtils');
const { BaseError } = require('../Utils/ErrorHandler');
const userService = require('../Services/UsersServices');
const validator = require('../Validators/Validator');
const Schema = require('../Validators/UsersSchema');

UsersController.login = async (req, res, next) => {
  const logName = 'login User :';
  console.log('asda');
  const logger = logUtils.getLoggerWithId(log4js, logName);

  const { body } = req;

  logger.info(`Start UserController.login: params ${JSON.stringify(body)}`);

  try {
    console.log('entro');

    validator(Schema).validateRequest(body);

    return userService.login(body, { logger, logName })
      .then((response) => res.send({ messsage: 'login', response }))
      .catch((error) => (new BaseError(error.messsage)));
  } catch (error) {
    return next(error);
  }
};


UsersController.signing = async (req, res, next) => {
  const logName = 'Register User: ';
  console.log('asdf');
  const logger = logUtils.getLoggerWithId(log4js, logName);

  const { body } = req;

  logger.info(`Start UserController.signing: params ${JSON.stringify(body)}`);

  try {
    validator(Schema).validateRequest(body);


    return userService.signin(body, { logger, logName })
      .then((response) => res.send({ messsage: 'register user', response }))
      .catch((error) => next(new BaseError(error.messsage)));
  } catch (error) {
    return next(error);
  }
};

UsersController.updateUser = (req, res, next) => {
  const logName = 'Update user';
  const { body } = req;
  const { id } = req.params;

  const logger = logUtils.getLoggerWithId(log4js, logName);

  logger.info(`Start UserController.updateUser: params ${JSON.stringify(id)}`);
  console.log(id);

  try {
    return userService.updateUser(body, id, { logger, logName })
      .then((response) => res.send({ messsage: 'update user', response }))
      .catch((error) => next(new BaseError(error.messsage)));
  } catch (error) {
    return next(error);
  }
};

UsersController.getUserById = async (req, res, next) => {
  const logName = 'get user by id';
  const { id } = req.params;

  const logger = logUtils.getLoggerWithId(log4js, logName);

  logger.info(`Start UserControlle.getUserById: params ${JSON.stringify(id)}`);
  console.log(id);


  try {
    return userService.getUserById(id, { logger, logName })
      .then((response) => res.send({ messsage: 'get user by id', response }))
      .catch((error) => next(new BaseError(error.messsage)));
  } catch (error) {
    return next(error);
  }
};
