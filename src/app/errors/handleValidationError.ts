import mongoose from 'mongoose';
import { TErrorSources } from '../interface/errors';
import httpStatus from 'http-status';

const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const errorSources: TErrorSources = Object.values(err).map((value) => {
    return {
      path: value.path,
      message: value.message,
    };
  });
  const statusCode = httpStatus.BAD_REQUEST;
  return {
    statusCode,
    message: 'Mongoose validation error',
    errorSources,
  };
};

export default handleValidationError;
