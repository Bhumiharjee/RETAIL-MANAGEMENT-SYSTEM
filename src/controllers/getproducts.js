const Product = require("../db/models/products.js")

module.exports = saveproduct = async (req, res) => {
    try {
        const products = await Product.find()
        return res.status(200).send(products)
    } catch (error) {
        return res.status(422).json({ "message": error.message })
    }
}