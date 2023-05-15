const Product = require("../db/models/products.js")

module.exports = getproductbyid = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.find({ _id: id })
        return res.status(200).send(product)
    } catch (error) {
        return res.status(422).json({ "message": error.message })
    }
}