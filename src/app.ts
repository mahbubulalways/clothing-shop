import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import applicationRoutes from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', applicationRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);
app.use('*', notFound);
export default app;
