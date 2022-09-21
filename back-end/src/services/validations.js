const Joi = require('joi');

const schemas = {
  login: Joi.object().keys({
    email: Joi.string().email().required()
      .messages({ 'string.empty': 'Some required fields are missing' }),
    password: Joi.string().min(6).required()
      .messages({ 'string.email': 'Some required fields are missing' }),
  }),

  // user: Joi.object().keys({
  //   displayName: Joi.string().min(8).required(),
  //   email: Joi.string().email().required(),
  //   password: Joi.string().min(6).alphanum().required(),
  //   image: Joi.string().required(),
  // }),
};

const validateSchema = (schema, dataToValidate) => {
  const { error, value } = schema.validate(dataToValidate);
  if (error) throw error;
  return value;
};

module.exports = {
  validateSchema,
  schemas,
};