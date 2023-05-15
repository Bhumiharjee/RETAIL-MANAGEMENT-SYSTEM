const Product = require("../db/models/products.js")

module.exports = saveproduct = async (req, res) => {
    try {
        const { name, quantity, type, purchase, selling, grossweight, netweight, weightUnit, hsn } = req.body
        if (!name || !quantity || !type || !purchase || !selling || !weightUnit) {
            throw new Error("Invalid parameters")
        }
        if (!parseInt(quantity) || !parseInt(purchase) || !parseInt(selling)) {
            throw new Error("Invalid parameters in the fields")
        }
        const products = await Product.find({ name })
        if (products.length <= 0) {
            const d = new Date();
            const date = d.toLocaleString()
            const random = parseInt(Math.random() * 10000) // random number generator for unique key
            const random1 = parseInt(Math.random() * 10000) // random number generator for unique key
            const random2 = parseInt(Math.random() * 10000) // random number generator for unique key
            const random3 = parseInt(Math.random() * 10000) // random number generator for unique key
            const key = random3 + d.getMilliseconds() + random + d.getMinutes() + random1 + d.getSeconds() + random2
            const addProduct = new Product({
                name: name,
                quantity: quantity,
                type: type,
                purchasePricePerUnit: purchase,
                sellingPricePerUnit: selling,
                grossWeight: grossweight,
                netWeight: netweight,
                weightUnit: weightUnit,
                hsn: hsn,
                date: date,
                key: key
            })
            await addProduct.save()
            return res.status(200).json({ "message": "Product saved successfully" })
        } else {
            throw new Error("Product with same name already exists")
        }
    } catch (error) {
        return res.status(422).json({ "message": error.message })
    }
}