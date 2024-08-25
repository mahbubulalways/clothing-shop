import { z } from 'zod';

const createProductValidation = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, 'Name is required')
      .refine(
        (value) => {
          const words = value.split(' ');
          return words.every(
            (word) => word.charAt(0) === word.charAt(0).toUpperCase(),
          );
        },
        {
          message: 'Each word in the name must be capitalized',
        },
      ),
    tagName: z.string().min(1, 'Tag name is required'),
    productCode: z.string().optional(),
    images: z.array(z.string()).min(1, 'At least one image is required'),
    category: z.string().min(1, 'Category name is required'),
    categoryTag: z.string().min(1, 'Category tag is required'),
    price: z.number().optional(),
    discount: z.number().optional(),
    priceWithDiscount: z.number().min(0, 'Price with discount is required'),
    colors: z.array(z.string()).optional(),
    size: z.array(z.string()).optional(),
    status: z
      .enum(['In stock', 'Out of stock'])
      .refine((value) => value === 'In stock' || value === 'Out of stock', {
        message: 'Status must be either "In stock" or "Out of stock"',
      }),
  }),
});

export const productValidation = {
  createProductValidation,
};
