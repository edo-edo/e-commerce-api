import { Router } from 'express';

import { getProducts } from './product.controller';

const route = Router();

route.get('/', getProducts);

export default route;
