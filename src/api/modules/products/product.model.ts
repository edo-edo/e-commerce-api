import { Schema, model } from 'mongoose';

interface image {
    position: number,
    src: string,
}

interface Product {
    name: string,
    description: string,
    price: number | null,
    images: image[],
    status: string,
    state: string,
    category: string,
}

const schema = new Schema<Product>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: null },
    images: { type: [], required: true },
    status: { type: String, required: true },
    state: { type: String, required: true },
    category: { type: String, required: true },
}, { timestamps: true });

const productModel = model('Product', schema);

export default productModel;
