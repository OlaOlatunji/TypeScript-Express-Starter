import { Schema, model } from 'mongoose';
import { Product } from '../interfaces/Products';

const schema = new Schema({
  name: String,
  year: Number,
  color: String,
  pantone_value: String,
});

const Products = model<Product>('product', schema);

export default Products;
