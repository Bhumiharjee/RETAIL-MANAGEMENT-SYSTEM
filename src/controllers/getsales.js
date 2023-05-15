const Sales = require("../db/models/sales.js")

module.exports = saveproduct = async (req, res) => {
    try {
        const sales = await Sales.find()
        return res.status(200).send(sales)
    } catch (error) {
        return res.status(422).json({ "message": error.message })
    }
}