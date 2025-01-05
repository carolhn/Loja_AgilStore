import { TProduct } from 'src/types/product';
import productModel from '../database/models/product';
import { validationNewProduct } from './validations/validationInputsValues';

async function CreateProductService({
  name_product,
  category,
  quantity,
  price,
}: TProduct): Promise<{ status: string; data?: TProduct; message?: string }> {
  const validationError = validationNewProduct({
    name_product,
    category,
    quantity,
    price,
  });

  if (validationError) {
    return {
      status: validationError.status,
      message: validationError.message,
    };
  }

  const newProduct = await productModel.create({ name_product, category, quantity, price });

  return {
    status: 'SUCCESS',
    data: newProduct.toJSON() as TProduct,
  };
}

export default CreateProductService;
