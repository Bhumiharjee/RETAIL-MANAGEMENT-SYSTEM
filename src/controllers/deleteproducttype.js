const ProductType = require("../db/models/productTypes")

module.exports = deleteproducttype = async (req, res) => {
    try {
        const { pId } = req.body;
        const ProductTypesData = await ProductType.findOne({ _id: pId });
        await ProductType.deleteOne({ _id: ProductTypesData._id });
        return res.status(200).json({ "message": "Product Type delete successfully" });
    } catch (error) {
        return res.status(422).json({ "message": error.message });
    }
}