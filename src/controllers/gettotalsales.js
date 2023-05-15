const Sales = require("../db/models/sales.js")
const Product = require("../db/models/products.js")


module.exports = gettotalsales = async (req, res) => {
    try {
        const sales = await Sales.find()
        let totalSale = 0
        let profit = 0
        let purchasePrices = 0
        let salesPrices = 0
        let paymentPending = 0


        // var startDate = new Date("4/8/2022");
        // var endDate = new Date("27/8/2022");

        // var resultProductData = sales.filter(a => {
        //     var date = new Date(a.billDate);
        //     return (date >= startDate && date <= endDate);
        //     console.log(date)
        // });
        
        sales.forEach((e) => {
            totalSale += Number(e.totalAmount)
            purchasedProducts = JSON.parse(e.productsPurchased)
            if (e.payment !== "full") {
                paymentPending += Number(e.totalAmountBalance)
            }
            purchasedProducts.forEach(async (e1) => {
                const product = await Product.find({ _id: e1.id })
                product.forEach((e2) => {
                    purchasePrices += (Number(e2.purchasePricePerUnit) * Number(e1.quantity))
                    // salesPrices += e1.amount
                })
                profit = totalSale - purchasePrices
            })

            const str = e.billDate

            // const d = new Date();
            // const date = d.toLocaleString()
            // const date = d.toISOString()

            // var endDate = new Date("27/9/2022,10:10:32pm");
            // let date = ""
            // for (let i = 0; i < str.length; i++) {
            //     if (str[i] == "/") {
            //         str[i] = "-"
            //     }
            //     if (str[i] == ",") {
            //         break
            //     } else {
            //         date += str[i]
            //     }
            // }
            // var startDate = new Date(date);
            // console.log(startDate)
            // console.log(date)
            // console.log(endDate)

        })
        setTimeout(function () {
            return res.status(200).send([totalSale, sales.length, profit, paymentPending])
        }, 500);

    } catch (error) {
        console.log(error)
        return res.status(422).json({ "message": error.message })
    }
}