const encryptor = module.exports;

const sha1 = require('sha1');

encryptor.encrypt = (value) => sha1(value);
