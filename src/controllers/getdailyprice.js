const DailyPrice = require("../db/models/dailyPrice")

module.exports = getdailyprice = async (req, res) => {
    try {
        const price = await DailyPrice.find()
        return res.status(200).send(price);
    } catch (error) {
        return res.status(422).json({ "message": error.message })
    }
}