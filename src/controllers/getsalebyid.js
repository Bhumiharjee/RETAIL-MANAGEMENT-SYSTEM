const Sale = require("../db/models/sales.js")
const Product = require("../db/models/products.js")

module.exports = getsalebyid = async (req, res) => {
    try {
        const id = req.body
        const sale = await Sale.find({ _id: id.id })
        return res.status(200).send(sale)

    } catch (error) {
        console.log(error.message)
        return res.status(422).json({ "message": error.message })
    }
}