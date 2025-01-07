import { TProduct } from 'src/types/product';
import productModel from '../database/models/product';
import { readProductsData, writeProductsData } from '../utils/index';
import { validationNewProduct } from './validations/validationInputsValues';

export async function createProductService({
  name_product,
  category,
  quantity,
  price,
}: TProduct): Promise<{ status: string; data?: TProduct; message?: string }> {
  try {
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

    const products = await readProductsData();
    products.push(newProduct.toJSON() as TProduct);
    await writeProductsData(products);

    return {
      status: 'SUCCESS',
      data: newProduct.toJSON() as TProduct,
    };
  } catch (error) {
    console.error('Error creating product:', error);
    return {
      status: 'ERROR',
      message: 'Internal Server Error',
    };
  }
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

export async function updateProductService(
  id: string,
  { name_product, category, quantity, price }: TProduct,
): Promise<{ status: string; data?: TProduct; message?: string }> {
  const isProduct = await productModel.findByPk(id);

  if (!isProduct) {
    return {
      status: 'ERROR',
      message: 'ID not found',
    };
  }

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

  await isProduct.update({ name_product, category, quantity, price });

  const updatedProductData = await readProductsData();
  const updateProduct = updatedProductData.map(product =>
    product.id === Number(id) ? { ...product, name_product, category, quantity, price } : product,
  );
  await writeProductsData(updateProduct);

  return {
    status: 'SUCCESS',
    data: isProduct.toJSON() as TProduct,
  };
}

export async function deleteProductService(id: string): Promise<{ status: string; message?: string }> {
  const isProduct = await productModel.findByPk(id);

  if (!isProduct) {
    return {
      status: 'ERROR',
      message: 'ID not found',
    };
  }

  await isProduct.destroy();

  const deleteProductData = await readProductsData();
  const deleteProduct = deleteProductData.filter(product => product.id !== Number(id));
  await writeProductsData(deleteProduct);

  return {
    status: 'SUCCESS',
    message: 'Product deleted successfully',
  };
}

export async function searchProductService(
  id?: string,
  name_product?: string,
): Promise<{ status: string; data?: TProduct[]; message?: string }> {
  const filterSearch = id ? { id } : { name_product };

  if (!filterSearch) {
    return {
      status: 'ERROR',
      message: 'ID or name_product must be provided',
    };
  }

  const productList = await productModel.findAll({
    where: {
      ...filterSearch,
    },
  });

  if (productList.length === 0) {
    return {
      status: 'ERROR',
      message: 'No products found',
    };
  }

  return {
    status: 'SUCCESS',
    data: productList.map(product => product.toJSON() as TProduct),
  };
}
