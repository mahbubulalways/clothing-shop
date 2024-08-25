import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { addSubCategoryToDB, getSubCategoryFromDB } from './category.service';

//! post sub category
const addSubCategoryController = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await addSubCategoryToDB(body);
  if (result?._id) {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Sub category Inserted successfully',
      data: result,
    });
  }
});

//! get sub category

const getSubCategoryController = catchAsync(async (req, res) => {
  const result = await getSubCategoryFromDB();
  if (result?.length) {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Sub category Inserted successfully',
      data: result,
    });
  }
});

export const subCategoryController = {
  addSubCategoryController,
  getSubCategoryController,
};
