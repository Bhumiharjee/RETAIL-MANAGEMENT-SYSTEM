const mongoose = require("mongoose");

const newInvoice = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: true,
    }

});

const Invoice = new mongoose.model("Invoice", newInvoice);

module.exports = Invoice;