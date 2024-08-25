import { Router } from 'express';
import { mainCategoryController } from './mainCategory.controller';
const router = Router();

router.post(
  '/add-main-category',
  //   validateRequest(productValidation.createProductValidation),
  mainCategoryController.addMainCategoryController,
);
router.get(
  '/get-main-category',
  //   validateRequest(productValidation.createProductValidation),
  mainCategoryController.getMainCategoryController,
);

export default router;
