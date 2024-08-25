export interface IProducts {
  name: string;
  tagName: string;
  productCode: string;
  images: string[];
  price: number;
  discount: number;
  priceWithDiscount: number;
  category: string;
  categoryTag: string;
  size: string[];
  colors: string[];
  status: 'In stock' | 'Out of stock';
  isDeleted: boolean;
}
