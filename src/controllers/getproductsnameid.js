const Product = require("../db/models/products.js")

module.exports = saveproduct = async (req, res) => {
    try {
        const products = await Product.find()
        const arr = []
        await products.forEach((product) => {
            arr.push({ id: product._id, name: product.name + " " + product.netWeight + product.weightUnit })
        })
        return res.status(200).send(arr)
    } catch (error) {
        return res.status(422).json({ "message": error.message })
    }
}