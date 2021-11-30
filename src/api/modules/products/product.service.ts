import pagination from '../../utilities/pagination';
import Product from './product.model';

const getProducts = (pageNumber, pageSize) => {
  const { offset, limit } = pagination(pageNumber, pageSize);

  const Products = Product.find().skip(offset).limit(limit);

  return Products;
};

export default { getProducts };
