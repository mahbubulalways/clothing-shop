import mongoose from 'mongoose';
import { IProducts } from './products.interface';

const productsSchema = new mongoose.Schema<IProducts>(
  {
    name: {
      type: String,
      required: [true, 'Name must required'],
      validate: {
        validator: function (value: string) {
          const words = value.split(' ');
          for (let i = 0; i < words.length; i++) {
            if (words[i].charAt(0) !== words[i].charAt(0).toUpperCase()) {
              return false;
            }
          }
          return true;
        },
        message: 'Each word in the name must be capitalized',
      },
    },
    tagName: {
      type: String,
      required: [true, 'Tag name is required'],
    },
    productCode: {
      type: String,
      required: false,
    },
    images: {
      type: [String],
      required: [true, 'Image must required'],
    },
    category: {
      type: String,
      required: [true, 'Category name is required'],
    },
    categoryTag: {
      type: String,
      required: [true, 'Category tag  is required'],
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    priceWithDiscount: {
      type: Number,
      required: [true, 'Price must required'],
    },
    colors: {
      type: [String],
      required: false,
    },
    size: {
      type: [String],
      required: false,
    },
    status: {
      type: String,
      enum: ['In stock', 'Out of stock'],
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Products = mongoose.model<IProducts>('Products', productsSchema);
export default Products;
