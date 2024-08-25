import { Router } from 'express';
import productsRoutes from '../modules/products/products.routes';
import mainCategoryRoutes from '../modules/mainCategory/mainCategory.routes';
import subCategoryRoutes from '../modules/category/category.routes';
import usersRoutes from '../modules/users/user.routes';
import authRoutes from '../modules/auth/auth.routes';
const router = Router();

const applicationRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/users',
    route: usersRoutes,
  },
  {
    path: '/products',
    route: productsRoutes,
  },
  {
    path: '/main-category',
    route: mainCategoryRoutes,
  },
  {
    path: '/sub-category',
    route: subCategoryRoutes,
  },
];

applicationRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
