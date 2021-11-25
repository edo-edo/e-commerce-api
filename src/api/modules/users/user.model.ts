import { Schema, model } from 'mongoose';

interface User {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  provider: string,
}

const schema = new Schema<User>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: false },
  provider: { type: String, required: true },
}, { timestamps: true });

const userModel = model('User', schema);

export default userModel;