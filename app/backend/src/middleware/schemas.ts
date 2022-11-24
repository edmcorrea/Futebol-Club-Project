import Joi = require('joi');

const emailSchema = Joi.string().email().required();
const passSchema = Joi.string().min(8).required();

const nameAmountSchema = Joi.string().min(3).required();

const schemaLogin = Joi.object({
  email: emailSchema,
  password: passSchema,
});

const schemaProducts = Joi.object({
  name: nameAmountSchema,
  amount: nameAmountSchema,
});

export {
  schemaLogin,
  schemaProducts,
};
