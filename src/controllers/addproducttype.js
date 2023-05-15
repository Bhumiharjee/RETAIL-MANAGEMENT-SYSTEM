const ProductsType = require('../db/models/productTypes')

module.exports = addproducttype = async (req, res) => {
    try {
        const { productType } = req.body
        const ProductsTypes = await ProductsType.find({ addProductType: productType })

        if (ProductsTypes[0].productType === productType) {
            throw new Error(`Product type already exists`)
        } else {
            const addProductType = new ProductsType({
                productType: productType
            })
            await addProductType.save()
        }
        res.status(200).json({ "message": "Product Update Success" })
    } catch (error) {
        return res.status(422).json({ "message": error.message })
    }
}