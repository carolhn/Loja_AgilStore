import { Request, Response } from 'express';
import CreateProductService from '../services/product';

async function CreateProductController(req: Request, res: Response): Promise<void> {
  const { name_product, category, quantity, price } = req.body;

  try {
    const newProduct = await CreateProductService({ name_product, category, quantity, price });

    if (newProduct.status === 'INVALID_VALUE') {
      res.status(400).json({ message: newProduct.message });
    }

    res.status(201).json(newProduct);
  } catch (error) {
    console.error('controler---', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export default CreateProductController;
