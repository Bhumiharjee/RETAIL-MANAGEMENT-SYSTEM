const Product = require("../db/models/products.js")

module.exports = deleteproduct = async (req, res) => {
    try {
        const { pId } = req.body
        const Userdata = await Product.findOne({ _id: pId });
        await Product.deleteOne({ _id: Userdata._id });
        return res.status(200).json({ "message": "Product delete successfully" })
    } catch (error) {
        return res.status(422).json({ "message": error.message })
    }
}