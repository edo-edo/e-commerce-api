import pagination from "../../utilities/pagination";
import Product from './product.model';

interface getProductsProps {
    pageNumber: string,
    pageSize: string,
}

const getProducts = ( { pageNumber, pageSize }: getProductsProps) => {
    const { offset, limit } = pagination(pageNumber, pageSize);

    const Products = Product.find().skip(offset).limit(limit);

    return Products;
}


export default { getProducts }
