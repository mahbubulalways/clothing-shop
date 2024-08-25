import { Router } from 'express';
import { productController } from './products.controller';
import validateRequest from '../../middleware/validateRequest';
import { productValidation } from './products.validation';
const router = Router();

router.post(
  '/add-product',
  validateRequest(productValidation.createProductValidation),
  productController.addProductsController,
);

export default router;
