const Joi = require('joi');

const schemas = {
  login: Joi.object().keys({
    email: Joi.string().email().required()
      .messages({ 'string.empty': 'Some required fields are missing' }),
    password: Joi.string().min(6).required()
      .messages({ 'string.email': 'Some required fields are missing' }),
  }),

  sale: Joi.object().keys({
    userId: Joi.number().required(),
    sellerId: Joi.number().required(),
    totalPrice: Joi.number().positive().required(),
    deliveryAddress: Joi.string().required(),
    deliveryNumber: Joi.number().min(1).required(),
  }),
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