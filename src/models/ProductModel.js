const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        type: { type: String, required: true },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
        rating: { type: Number, required: true },
        description: { type: String, required: true },
    },
    {
        timestamps: true  // Chú ý đúng chính tả ở đây
    }
);

const Product = mongoose.model('Product', productSchema);  // Chú ý đúng chính tả ở đây
module.exports = Product;
