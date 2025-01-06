import { Request, Response } from 'express';
import {
  createProductService,
  deleteProductService,
  listProductService,
  updateProductService,
} from '../services/product';

export async function createProductController(req: Request, res: Response): Promise<void> {
  const { name_product, category, quantity, price } = req.body;

  try {
    const newProduct = await createProductService({ name_product, category, quantity, price });

    if (newProduct.status === 'INVALID_VALUE') {
      res.status(400).json({ message: newProduct.message });
    }

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function listProductController(req: Request, res: Response): Promise<void> {
  const { category = '', orderProduct = 'name_product' } = req.query;

  try {
    const productList = await listProductService(
      category as string,
      orderProduct as 'name_product' | 'quantity' | 'price',
    );

    res.status(200).json(productList);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function updateProductController(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { name_product, category, quantity, price } = req.body;

  try {
    const updatedProduct = await updateProductService(id, { name_product, category, quantity, price });

    if (updatedProduct.status === 'ERROR') {
      res.status(404).json({ message: updatedProduct.message });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function deleteProductController(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try {
    const deletedProduct = await deleteProductService(id);

    if (deletedProduct.status === 'ERROR') {
      res.status(404).json({ message: deletedProduct.message });
    }

    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
