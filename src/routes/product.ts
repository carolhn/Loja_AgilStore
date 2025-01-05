import { Router } from 'express';
import CreateProductController from '../controllers/product';

const productsRouter = Router();

productsRouter.post('/new_product', CreateProductController);

export default productsRouter;
