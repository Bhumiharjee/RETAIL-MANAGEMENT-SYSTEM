const mongoose = require("mongoose");

const newSale = new mongoose.Schema({
    customerFirstName: {
        type: String,
        required: true,
    },
    customerLastName: {
        type: String,
        required: true,
    },
    customerEmail: {
        type: String,
        required: true,
    },
    customerPhone: {
        type: String,
        required: true,
    },
    customerAddress: {
        type: String,
        required: true,
    },
    customerCity: {
        type: String,
        required: true,
    },
    customerState: {
        type: String,
        required: true,
    },
    customerZipCode: {
        type: String,
        required: true,
    },
    productsPurchased: [{
        type: String,
        required: true,
    }],
    totalAmount: {
        type: String,
        required: true,
    },
    gstAmountPercentage: {
        type: String,
        required: true,
    },
    amountBeforeGST: {
        type: String,
        required: true,
    },
    partialAmountPaid: {
        type: String,
        required: true,
    },
    totalAmountBalance: {
        type: String,
        required: true,
    },
    payment: {
        type: String,
        required: true,
    },
    dueDate: {
        type: String,
    },
    billDate: {
        type: String,
        required: true,
    },
    saleDate: {
        type: String,
        required: true,
    },
    invoiceNumber: {
        type: String,
        required: true,
    },
});

const Sale = new mongoose.model("Sale", newSale);

module.exports = Sale;