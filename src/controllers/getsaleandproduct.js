const Sale = require("../db/models/sales.js")
const Product = require("../db/models/products.js")

module.exports = getsaleandproduct = async (req, res) => {
    try {
        const id = req.body
        const sale = await Sale.find({ _id: id.id })
        const products = JSON.parse(sale[0].productsPurchased)
        let arr = []
        products.forEach(async (e) => {
            const product = await Product.find({ _id: e.id })
            const obj = {
                hsn: product[0].hsn,
                net: product[0].netWeight + " " + product[0].weightUnit,
                gross: product[0].grossWeight + " " + product[0].weightUnit,
            }
            arr.push(obj)
        })
        setTimeout(function () {
            return res.status(200).send([sale, arr])
        }, 1000);

    } catch (error) {
        return res.status(422).json({ "message": error.message })
    }
}