import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import User from '../users/user.model';
import { IAuth } from './auth.interface';
import bcrypt from 'bcrypt';
import { jwtHelpers } from './auth.utils';
import config from '../../config';

export const loginUserIntoDB = async (payload: IAuth) => {
  const result = await User.findOne({ mobileNumber: payload.mobileNumber });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }
  const matchPassword = await bcrypt.compare(
    payload.password,
    result?.password as string,
  );

  const tokenPayload = {
    _id: result?._id,
    mobileNumber: result?.mobileNumber,
    email: result?.email,
    role: 'user',
  };

  if (!matchPassword) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Mobile number or password was wrong',
    );
  }

  const createToken = jwtHelpers.createToken(
    tokenPayload,
    config.JWT_SECRET as string,
    config.JWT_EXPIRE_IN as string,
  );

  const data = {
    token: { accessToken: createToken },
    data: {
      _id: result?._id,
      mobileNumber: result?.mobileNumber,
      email: result?.email,
    },
  };
  return data;
};
