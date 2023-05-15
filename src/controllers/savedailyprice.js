const DailyPrice = require("../db/models/dailyPrice")

module.exports = savedailyprice = async (req, res) => {
    try {
        const { todayPrice } = req.body;
        const price = await DailyPrice.findOne({})
        // console.log(price._id)
        // const newDailyPrice = new DailyPrice({
        //     dailyGoldPricePerGram: todayPrice.todayGoldPrice,
        //     dailySilverPricePerGram: todayPrice.todaySilverPrice
        // })
        // await newDailyPrice.save();
        await DailyPrice.findOneAndUpdate({ _id: price._id }, {
            dailyGoldPricePerGram: todayPrice.todayGoldPrice,
            dailySilverPricePerGram: todayPrice.todaySilverPrice
        })
        return res.status(200).json({ "message": "Daily Price saved successfully" })
    } catch (error) {
        return res.status(422).json({ "message": error.message })
    }
}