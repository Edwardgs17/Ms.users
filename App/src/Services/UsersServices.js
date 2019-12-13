/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
const UserService = module.exports;
const UserRepository = require('../Repositories/UsersRepositories');
const ecryptor = require('../Utils/Encryptor');

const Response = {};


UserService.login = async (user) => {
  try {
    // user.password = ecryptor.encrypt(user.password);

    res = UserRepository.verifyLog(user);

    console.log(res);


    return res;
  } catch (error) {
    console.log('error');

    return Response;
  }
};


UserService.signin = async (user) => {
  try {
    const { count } = await UserRepository.countUserbyId(user.email);

    console.log(count);


    if (count > 0) {
      Response.status = 401;
      Response.body = {};
    } else {
      const res = await UserRepository.createSignin(user);
      const resp = res[0];
      console.log(res);

      return resp;
    }

    return Response;
  } catch (error) {
    console.log('err');

    return Response;
  }
};

UserService.getUserById = async (id) => {
  res = await UserRepository.getUserById(id);
  console.log(id);

  return res;
};

UserService.updateUser = async (user, id) => {
  id = Number(id);
  console.log(user);
  res = await UserRepository.updateUser(user, id);
  console.log(res);

  return res;
};
