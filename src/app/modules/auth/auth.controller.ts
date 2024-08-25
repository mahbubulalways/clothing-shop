import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { loginUserIntoDB } from './auth.service';
import { AppError } from '../../errors/AppError';

const loginUserController = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await loginUserIntoDB(body);
  if (result) {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Login successfully',
      data: result,
    });
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, 'Something went wrong');
  }
});

export const authController = {
  loginUserController,
};
