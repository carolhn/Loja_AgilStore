import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  listProductController,
  searchProductController,
  updateProductController,
} from '../controllers/product';

const productsRouter = Router();

productsRouter.post('/new_product', createProductController);
productsRouter.get('/list_product', listProductController);
productsRouter.put('/update_product/:id', updateProductController);
productsRouter.delete('/remove_product/:id', deleteProductController);
productsRouter.get('/search', searchProductController);

export default productsRouter;
