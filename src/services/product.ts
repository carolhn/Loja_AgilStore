import { TProduct } from 'src/types/product';
import productModel from '../database/models/product';
import { validationNewProduct } from './validations/validationInputsValues';

export async function createProductService({
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

export async function listProductService(
  category: string,
  orderProduct: 'name_product' | 'quantity' | 'price',
): Promise<TProduct[]> {
  const filterCategory = category ? { category } : {};

  const productList = await productModel.findAll({
    where: {
      ...filterCategory,
    },
    order: [[orderProduct, 'ASC']],
  });

  return productList.map(product => product.toJSON() as TProduct);
}
