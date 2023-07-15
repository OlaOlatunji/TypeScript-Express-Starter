import { Document } from 'mongoose';

export interface Product extends Document {
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}
