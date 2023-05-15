const Products = require('../db/models/products')

module.exports = updateproduct = async (req, res) => {
    try {
        const { name, quantity, type, purchase, selling, grossweight, netweight, weightUnit, hsn, id } = req.body
        const product = await Products.findOneAndUpdate({ _id: id }, {
            name: name,
            quantity: quantity,
            type: type,
            purchasePricePerUnit: purchase,
            sellingPricePerUnit: selling,
            grossWeight: grossweight,
            netWeight: netweight,
            weightUnit: weightUnit,
            hsn: hsn
        })
        res.status(200).json({ "message": "Product Update Success" })
    } catch (error) {
        return res.status(422).json({ "message": error.message })
    }
}