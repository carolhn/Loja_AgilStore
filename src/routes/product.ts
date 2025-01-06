import { Router } from 'express';
import { createProductController, listProductController } from '../controllers/product';

const productsRouter = Router();

productsRouter.post('/new_product', createProductController);
productsRouter.get('/list_product', listProductController);

export default productsRouter;
