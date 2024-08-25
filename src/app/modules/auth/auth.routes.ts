import { Router } from 'express';
import { authController } from './auth.controller';

const router = Router();

router.post(
  '/login',
  //   validateRequest(productValidation.createProductValidation),
  authController.loginUserController,
);

export default router;
