import { IMainCategory } from './mainCategory.interface';
import MainCategory from './mainCategory.model';

export const addMainCategoryToDB = async (payload: IMainCategory) => {
  const result = MainCategory.create(payload);
  return result;
};
export const getMainCategoryToDB = async () => {
  const result = MainCategory.find({});
  return result;
};
