import { Router } from 'express';
import { userController } from './user.controller';

const router = Router();

router.post(
  '/create-user',
  //   validateRequest(productValidation.createProductValidation),
  userController.createNewUserController,
);

export default router;
