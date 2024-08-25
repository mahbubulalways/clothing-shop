import { Schema } from 'mongoose';

export interface ISubCategory {
  categoryName: string;
  categoryTag: string;
  mainCategory: Schema.Types.ObjectId;
}
