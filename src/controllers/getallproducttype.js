const ProductType = require("../db/models/productTypes")
const Product = require("../db/models/products.js")
const DailyPrice = require("../db/models/dailyPrice")

module.exports = getallproducttype = async (req, res) => {
    try {
        const products = await Product.find()
        const price = await DailyPrice.find()
        const productTypes = [];
        const productTypesObj = {};

        const productType = await ProductType.find();
        productType.forEach((e) => {
            productTypes.push(e.productType);
        })
        products.forEach((product) => {
            console.log(product)
            if (productTypes.includes(product.type)) {
                if (product.type in productTypesObj) {
                    if (product.type.toLowerCase() === "gold") {
                        productTypesObj[product.type] += Number(price[0].dailyGoldPricePerGram) * Number(product.grossWeight);
                    }
                    else if (product.type.toLowerCase() === "silver") {
                        productTypesObj[product.type] += Number(price[0].dailySilverPricePerGram) * Number(product.grossWeight);
                    }
                    else {
                        productTypesObj[product.type] += Number(product.sellingPricePerUnit) * Number(product.quantity);
                    }
                } else {
                    if (product.type.toLowerCase() === "gold") {
                        productTypesObj[product.type] = 0;
                        productTypesObj[product.type] += Number(price[0].dailyGoldPricePerGram) * Number(product.grossWeight);
                    }
                    else if (product.type.toLowerCase() === "silver") {
                        productTypesObj[product.type] = 0;
                        productTypesObj[product.type] += Number(price[0].dailySilverPricePerGram) * Number(product.grossWeight);
                    } else {
                        productTypesObj[product.type] = 0;
                        productTypesObj[product.type] += Number(product.sellingPricePerUnit) * Number(product.quantity);
                    }
                }
            }
        })
        return res.status(200).send([productTypes, productTypesObj, productType]);
    } catch (error) {
        return res.status(422).json({ "message": error.message });
    }
}