const UserRepositories = module.exports;
const DB = require('../Utils/Database');


UserRepositories.verifyLog = (user) => DB('users').count('*').where({ email: user.email })
  .andWhere({ password: user.password })
  .first();


UserRepositories.createSignin = (user) => DB('users').insert(user).returning('*');
UserRepositories.updateUser = (user, id) => DB('users').where({ id }).update(user).returning('*');
UserRepositories.getUserById = (ids) => DB('users').select('*').where({ id: ids }).first();
UserRepositories.countUserbyId = (ema) => DB('users').count('*').where({ email: ema }).first();
