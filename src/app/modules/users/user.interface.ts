import { Model } from 'mongoose';

export interface IUser {
  name: string;
  mobileNumber: string;
  email: string;
  password: string;
}

export interface UserModel extends Model<IUser> {
  // eslint-disable-next-line no-unused-vars
  isExistingUser(payload: string): Promise<IUser> | null;
}
