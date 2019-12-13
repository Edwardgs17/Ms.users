const { Router } = require('express');
const UserController = require('../Controllers/UserController');


class UserRouter {
  constructor() {
    this.UserRouter = Router();
    this.config();
  }


  config() {
    this.UserRouter.post('/Users/Login', UserController.login);
    this.UserRouter.post('/Users/Signin', UserController.signing);
    this.UserRouter.put('/Users/Update/:id', UserController.updateUser);
    this.UserRouter.get('/Users/Consult/:id', UserController.getUserById);
  }
}

const router = new UserRouter();
module.exports = router.UserRouter;
