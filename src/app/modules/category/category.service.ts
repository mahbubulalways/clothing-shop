import { ISubCategory } from './category.interface';
import SubCategory from './category.model';

export const addSubCategoryToDB = async (payload: ISubCategory) => {
  const result = SubCategory.create(payload);
  return result;
};
export const getSubCategoryFromDB = async () => {
  const result = SubCategory.find({}).populate('mainCategory');
  return result;
};
