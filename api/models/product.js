
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sku: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    unit: { type: String, required: false },
    expiration: { type: String, required: false },
    model: { type: String, required: false },
    quantity: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    maker: { type: String, required: true },
    images: [String],
    status: { type: String, required: true },
    weight: { type: Number, required: false }, // Peso del producto
    ingredients: [String], // Lista de ingredientes
    allergens: [String], // Lista de alérgenos
    nutritionalInformation: { type: String, required: false }, // Información nutricional
    isFeatured: { type: Boolean, default: false }, // Indica si el producto es destacado
    isVegetarian: { type: Boolean, default: false }, // Indica si el producto es vegetariano
    isGlutenFree: { type: Boolean, default: false }, // Indica si el producto es libre de gluten
}, { versionKey: false });

module.exports = mongoose.model('Product', productSchema);
