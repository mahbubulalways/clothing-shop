import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  DATABASE_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT,
  BCRYPT_SALT: process.env.BCRYPT_SALT,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRE_IN: process.env.JWT_ACCESS_EXPIRES_IN,
};
