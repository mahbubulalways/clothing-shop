import mongoose from 'mongoose';
import { IMainCategory } from './mainCategory.interface';
const mainCategorySchema = new mongoose.Schema<IMainCategory>(
  {
    mainCategoryName: {
      type: String,
      required: [true, 'Category name is required'],
    },

    categoryType: {
      type: String,
      required: [true, 'Category type is required'],
    },
    mainCategoryTag: {
      type: String,
      required: [true, 'Main category tag  is required'],
    },
  },
  {
    timestamps: true,
  },
);

const MainCategory = mongoose.model<IMainCategory>(
  'MainCategory',
  mainCategorySchema,
);
export default MainCategory;
