const Sale = require('../db/models/sales')

module.exports = updatesale = async (req, res) => {
    try {
        const { totalAmount, payment, balance, amountPaid, lastDate, id } = req.body
        const sale = await Sale.findOneAndUpdate({ _id: id }, {
            totalAmount: totalAmount,
            partialAmountPaid: amountPaid,
            totalAmountBalance: balance,
            payment: payment,
            dueDate: lastDate,
        })
        res.status(200).json({ "message": "Sale Update Success" })
    } catch (error) {
        return res.status(422).json({ "message": error.message })
    }
}