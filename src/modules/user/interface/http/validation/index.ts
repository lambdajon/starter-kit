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

const updateUserSchema = {
  body: Joi.object({
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    email: Joi.string().email().optional(),
    phoneNumber: Joi.string().optional(),
    password: Joi.string()
      .optional()
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
  }),
  params: Joi.object({
    id: Joi.string().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i)
  })
};

export { createUserSchama, updateUserSchema };
