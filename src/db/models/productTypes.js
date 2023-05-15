const mongoose = require("mongoose");

const newProductType = new mongoose.Schema({
    productType: {
        type: String,
        required: true,
        unique: true,
    }

});

const ProductType = new mongoose.model("ProductType", newProductType);

module.exports = ProductType;