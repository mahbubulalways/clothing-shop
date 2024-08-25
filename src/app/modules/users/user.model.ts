import mongoose from 'mongoose';
import { IUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
const userSchema = new mongoose.Schema<IUser, UserModel>(
  {
    name: {
      type: String,
      required: [true, 'Name must required'],
    },
    email: {
      type: String,
      required: [true, 'Email must required'],
    },
    mobileNumber: {
      type: String,
      required: [true, 'Mobile number must required'],
    },
    password: {
      type: String,
      required: [true, 'Password  must required'],
    },
  },
  {
    timestamps: true,
  },
);

//! hash password here

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.BCRYPT_SALT));
  next();
});

//!check does user is exists
userSchema.statics.isExistingUser = async (payload: string) => {
  const isEmail = payload.includes('@');
  if (isEmail) {
    const isExist = await User.findOne({ email: payload });
    return isExist;
  } else {
    const isExist = await User.findOne({ mobileNumber: payload });
    return isExist;
  }
};

const User = mongoose.model<IUser, UserModel>('User', userSchema);

export default User;
