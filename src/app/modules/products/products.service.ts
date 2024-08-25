import { IProducts } from './products.interface';
import Products from './products.model';
import generateProductCode from './products.utils';

export const addProductToDB = async (body: IProducts) => {
  body.productCode = generateProductCode();
  const result = await Products.create(body);
  return result;
};
