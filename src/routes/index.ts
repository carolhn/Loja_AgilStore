import { Router } from 'express';
import productsRouter from './product';

const routes = Router();

routes.use('/products', productsRouter);

export default routes;
