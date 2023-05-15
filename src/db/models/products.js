const mongoose = require("mongoose");

const newProduct = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    purchasePricePerUnit: {
        type: String,
        required: true,
    },
    sellingPricePerUnit: {
        type: String,
        required: true,
    },
    grossWeight: {
        type: String,
        required: true,
    },
    netWeight: {
        type: String,
        required: true,
    },
    weightUnit: {
        type: String,
        required: true,
    },
    hsn: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    key: {
        type: String,
        required: true,
    }
});

const Product = new mongoose.model("Product", newProduct);

module.exports = Product;
