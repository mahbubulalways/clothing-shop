import { AppError } from '../../errors/AppError';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { addProductToDB } from './products.service';
import httpStatus from 'http-status';
const addProductsController = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await addProductToDB(body);

  if (result?._id) {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Products Inserted successfully',
      data: result,
    });
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, 'Product not inserted');
  }
});

export const productController = {
  addProductsController,
};
