const Sales = require("../db/models/sales.js")

module.exports = deleteSales = async (req, res) => {
    try {
        const { pId } = req.body
        const salesData = await Sales.findOne({ _id: pId });
        await Sales.deleteOne({ _id: salesData._id });
        return res.status(200).json({ "message": "Sales delete successfully" })
    } catch (error) {
        return res.status(422).json({ "message": error.message })
    }
}