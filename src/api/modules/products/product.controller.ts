import { Request, Response } from "express";

import ProductServices  from './product.service';

export const getProducts = async (req: Request, res: Response ) => {
    try {
        const { pageNumber, pageSize } = req.query;

        const products = await ProductServices.getProducts(pageNumber, pageSize);

        return res.json({ products });
    } catch (error) {
        return res.sendStatus(500);
    }

}

