import { Router } from 'express';

import productRouter from './modules/products/product.route';

const routers = Router();

routers.use('/product', productRouter);

export default routers;
