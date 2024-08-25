import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import { Server } from 'http';
const port = config.PORT || 5000;
const MONGODB_URI = config.DATABASE_URI;
let server: Server;
async function main() {
  try {
    await mongoose.connect(MONGODB_URI as string);
    server = app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();

process.on('unhandledRejection', () => {
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  process.exit(1);
});
