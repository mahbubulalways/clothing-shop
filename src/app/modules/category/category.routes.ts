import { Router } from 'express';
import { subCategoryController } from './category.controller';
const router = Router();

router.post(
  '/add-sub-category',
  //   validateRequest(productValidation.createProductValidation),
  subCategoryController.addSubCategoryController,
);
router.get(
  '/get-sub-category',
  //   validateRequest(productValidation.createProductValidation),
  subCategoryController.getSubCategoryController,
);

export default router;
