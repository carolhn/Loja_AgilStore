import Joi, { ObjectSchema } from 'joi';
import { TProduct } from 'src/types/product';

export const validateProductSchema: ObjectSchema<TProduct> = Joi.object({
  name_product: Joi.string().required(),
  category: Joi.string().required(),
  quantity: Joi.number().min(0).required(),
  price: Joi.number().min(0).required(),
});
