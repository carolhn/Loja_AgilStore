import { Request, Response } from 'express';
import { createProductService, listProductService } from '../services/product';

export async function createProductController(req: Request, res: Response): Promise<void> {
  const { name_product, category, quantity, price } = req.body;

  try {
    const newProduct = await createProductService({ name_product, category, quantity, price });

    if (newProduct.status === 'INVALID_VALUE') {
      res.status(400).json({ message: newProduct.message });
    }

    res.status(201).json(newProduct);
  } catch (error) {
    console.error('controler---', error);
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
