import { Router } from 'express';
import { createProductController, listProductController, updateProductController } from '../controllers/product';

const productsRouter = Router();

productsRouter.post('/new_product', createProductController);
productsRouter.get('/list_product', listProductController);
productsRouter.put('/update_product/:id', updateProductController);

export default productsRouter;
