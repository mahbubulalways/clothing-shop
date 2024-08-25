import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {
  addMainCategoryToDB,
  getMainCategoryToDB,
} from './mainCategory.service';

const addMainCategoryController = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await addMainCategoryToDB(body);
  if (result?._id) {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Main category Inserted successfully',
      data: result,
    });
  }
});

const getMainCategoryController = catchAsync(async (req, res) => {
  const result = await getMainCategoryToDB();
  if (result?.length) {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Main categories get successfully',
      data: result,
    });
  }
});

export const mainCategoryController = {
  addMainCategoryController,
  getMainCategoryController,
};
