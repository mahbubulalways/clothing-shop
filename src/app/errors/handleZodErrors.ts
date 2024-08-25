import httpStatus from 'http-status';
import { ZodError } from 'zod';

export const handleZodError = (err: ZodError) => {
  const errorSources = err.issues.map((issue) => {
    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  const statusCode = httpStatus.BAD_REQUEST;
  return {
    statusCode,
    message: 'Zod validation error',
    errorSources,
  };
};
