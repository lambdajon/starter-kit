import { Schema, model } from 'mongoose';
import { User, UserGender } from '../../../domain/entities/user/User';

const userSchema = new Schema<User>(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      // 998909990099
      type: String,
      required: true
    },
    password: String, // hashed password
    salt: String, // unique salt for password hashing
    verified: {
      type: Boolean,
      default: false
    }, // if user verify account this field be ture
    verificationCode: String, // verification code for verify user account. This field expires in 24h
    avatar: String, // 128x128 avatar
    gender: {
      enum: Object.values(UserGender)
    }
  },
  {
    versionKey: false,
    timestamps: true,
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

export default model<User>('users', userSchema);
