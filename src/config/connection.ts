import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI is not defined in the environment variables.');
}

const MONGO_URI = process.env.MONGO_URI;

const connect = async (): Promise<boolean> => {
  try {
    await mongoose.connect(MONGO_URI);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default connect;

