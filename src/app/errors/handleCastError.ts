import httpStatus from 'http-status';
import mongoose from 'mongoose';
import { TErrorSources } from '../interface/errors';

const handleCastError = (err: mongoose.Error.CastError) => {
  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];
  const statusCode = httpStatus.BAD_REQUEST;
  return {
    statusCode,
    message: 'Mongoose cast error',
    errorSources,
  };
};

export default handleCastError;
