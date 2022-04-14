import Joi from 'joi';

const createUserSchama = {
  body: Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    password: Joi.string().required()
  })
};

export { createUserSchama };
