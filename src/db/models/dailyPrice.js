const mongoose = require("mongoose");

const newDailyPrice = new mongoose.Schema({
    dailyGoldPricePerGram: {
        type: String,
        required: true,
    },
    dailySilverPricePerGram: {
        type: String,
        required: true,
    }
});

const DailyPrice = new mongoose.model("DailyPrice", newDailyPrice);

module.exports = DailyPrice;