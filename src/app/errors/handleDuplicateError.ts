import { TErrorSources } from '../interface/errors';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDuplicateError = (err: any) => {
  const regex = err.message.match(/"([^"]*)"/);
  const extract_values = regex && regex[1];
  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extract_values} is already exists`,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Mongoose duplicate error',
    errorSources,
  };
};

export default handleDuplicateError;
