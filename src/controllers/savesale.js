
const Sale = require("../db/models/sales.js")
const Invoice = require("../db/models/invoice")

module.exports = savesale = async (req, res) => {
    try {
        const invoiceData = await Invoice.find({})
        const invoice = Number(invoiceData[0].invoiceNumber) + 1
        const { first, last, email, phone, address, city, state, postal, totalAmount, payment, balance, amountPaid, data, lastDate, gstValue, amountBeforeGst, saleDateValue } = req.body
        if (!first || !last || !email || !phone || !address || !city || !state || !postal || !totalAmount || !payment || !data) {
            throw new Error("Invalid parameters")
        }
        // if (!parseInt(phone) || !parseInt(postal) || !parseInt(totalAmount) || !parseInt(balance) || !parseInt(amountPaid)) {
        //     throw new Error("Invalid parameters in the fields")
        // }
        const d = new Date();
        const date = d.toLocaleString()
        setTimeout(async function () {
            const addSale = new Sale({
                customerFirstName: first,
                customerLastName: last,
                customerEmail: email,
                customerPhone: phone,
                customerAddress: address,
                customerCity: city,
                customerState: state,
                customerZipCode: postal,
                productsPurchased: JSON.stringify(data),
                totalAmount: totalAmount,
                gstAmountPercentage: gstValue,
                amountBeforeGST: amountBeforeGst,
                partialAmountPaid: amountPaid,
                totalAmountBalance: balance,
                payment: payment,
                dueDate: lastDate,
                billDate: date,
                saleDate: saleDateValue,
                invoiceNumber: invoice
            })
            await addSale.save()
            const sale = await Invoice.findOneAndUpdate({ _id: invoiceData[0]._id }, {
                invoiceNumber: invoice
            })
            return res.status(200).json({ "message": "Sale saved successfully" })
        }, 100);

    } catch (error) {
        return res.status(422).json({ "message": error.message })
    }
}