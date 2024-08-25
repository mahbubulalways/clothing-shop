import { Response } from 'express';

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  const { data: resData, message, statusCode, success } = data;
  res.status(statusCode).json({
    success,
    message,
    data: resData,
  });
};

export default sendResponse;
