import { Schema, model } from 'mongoose';
import { User } from '../../../domain/entities/User';

const userSchema = new Schema<User>(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    verify: {
      type: Boolean,
      default: false
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
