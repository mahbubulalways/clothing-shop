import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { createNewUserIntoDB } from './user.service';
import { AppError } from '../../errors/AppError';

const createNewUserController = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await createNewUserIntoDB(body);
  if (result?._id) {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Account created successfully',
      data: result,
    });
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, 'Account is not created');
  }
});

export const userController = {
  createNewUserController,
};
