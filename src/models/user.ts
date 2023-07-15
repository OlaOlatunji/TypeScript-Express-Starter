import { Schema, model } from 'mongoose';
import { User } from '../interfaces/Users';

const schema = new Schema({
  email: { type: String, unique: true, required: true },
  first_name: String,
  last_name: String,
  avatar: String,
  password: { type: String, required: true },
});

const Users = model<User>('user', schema);

export default Users;
