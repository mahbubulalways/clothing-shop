import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { IUser } from './user.interface';
import User from './user.model';

export const createNewUserIntoDB = async (payload: IUser) => {
  const emailOrMobile = payload.email ? payload.email : payload.mobileNumber;
  const isExistUser = await User.isExistingUser(emailOrMobile);
  if (isExistUser) {
    throw new AppError(
      httpStatus.CONFLICT,
      'User with this email or mobile number is already exist',
    );
  }
  const result = User.create(payload);
  return result;
};
