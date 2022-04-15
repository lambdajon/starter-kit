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
const getUserSchemaById = {
  params: Joi.object({
    id: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required()
  })
};

export { createUserSchama, getUserSchemaById };
