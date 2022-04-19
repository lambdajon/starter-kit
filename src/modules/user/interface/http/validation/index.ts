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

const updateUserSchama = {
  body: Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email(),
    phoneNumber: Joi.string(),
  }),
  params: Joi.object({
    userId: Joi.string().regex(/^[a-f\d]{24}$/i).required(),
  })
};

const deleteUserSchama = {
  params: Joi.object({
    userId: Joi.string().regex(/^[a-f\d]{24}$/i).required(),
  })
};

const getUserSchama = {
  params: Joi.object({
    userId: Joi.string().regex(/^[a-f\d]{24}$/i).required(),
  })
};

export { createUserSchama, updateUserSchama, deleteUserSchama, getUserSchama };
