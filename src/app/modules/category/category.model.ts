import mongoose from 'mongoose';
import { ISubCategory } from './category.interface';
const subCategorySchema = new mongoose.Schema<ISubCategory>(
  {
    categoryName: {
      type: String,
      required: [true, 'Category name is required'],
    },

    categoryTag: {
      type: String,
      required: [true, 'Category type is required'],
    },
    mainCategory: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Main category   is required'],
      ref: 'MainCategory',
    },
  },
  {
    timestamps: true,
  },
);

const SubCategory = mongoose.model<ISubCategory>(
  'SubCategory',
  subCategorySchema,
);
export default SubCategory;
