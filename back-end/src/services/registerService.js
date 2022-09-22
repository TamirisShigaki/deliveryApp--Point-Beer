const Joi = require('joi');
const md5 = require('md5');
const { users } = require('../database/models/');

const schemaUser = Joi.object({
  username: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).alphanum().required(),
});

const registerService = {
 create: async (user) => {
    const { error } = schemaUser.validate(user);
    if (error) throw error;

    const { username, email, password } = user;
    const newPassword = md5(password);
    
    const emailExist = await users.findOne({ where: { email } });
    const userExist = await users.findOne({ where: { name: username } });
    
    if (emailExist || userExist) {
      const err = new Error('User already registered');
      err.name = 'ConflictError';
      throw err;
    };
    
    return users.create({ name: username, email, password: newPassword, role: 'customer' });
  }
};

module.exports = registerService;
