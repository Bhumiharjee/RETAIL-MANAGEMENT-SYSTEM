const Products = require('../db/models/products')

module.exports = updateproductquantity = async (req, res) => {
    try {
        const { data, status } = req.body

        if (status === "Add") {
            let isError = false;
            data.forEach(async e => {
                try {
                    const product = await Products.findOne({ _id: e.id })
                    const qty = Number(product.quantity) + Number(e.quantity)
                    let wei = 0
                    if (e.weightUnit === "mg") {
                        wei = (Number(product.grossWeight) + (Number(e.weight) / 1000)).toFixed(2)
                    }
                    if (e.weightUnit === "g") {
                        wei = (Number(product.grossWeight) + Number(e.weight)).toFixed(2)
                    }
                    if (e.weightUnit === "kg") {
                        wei = (Number(product.grossWeight) + (Number(e.weight) * 1000)).toFixed(2)
                    }
                    await Products.findOneAndUpdate({ _id: product._id }, {
                        quantity: qty,
                        grossWeight: wei,
                        netWeight: wei,
                    })
                } catch (error) {
                    res.status(422).json({ "message": error.message });
                    isError = true;
                }
            });
            setTimeout(function () {
                if (!isError) {
                    res.status(201).json({ "message": "Product Quantity updated successfully" });
                }
            }, 2000);
        } if (status === "Sub") {
            let isError = false;
            data.forEach(async e => {
                try {
                    const product = await Products.findOne({ _id: e.id })
                    const qty = Number(product.quantity) - e.quantity
                    let wei = 0
                    if (qty < 0) {
                        throw new Error(`${product.name} quantity is selected more than its available quantity`)
                    } else {
                        if (e.weightUnit === "mg") {
                            wei = (Number(product.grossWeight) - (Number(e.weight) / 1000)).toFixed(2)
                        }
                        if (e.weightUnit === "g") {
                            wei = (Number(product.grossWeight) - Number(e.weight)).toFixed(2)
                        }
                        if (e.weightUnit === "kg") {
                            wei = (Number(product.grossWeight) - (Number(e.weight) * 1000)).toFixed(2)
                        }
                        await Products.findOneAndUpdate({ _id: product._id }, {
                            quantity: qty,
                            grossWeight: wei,
                            netWeight: wei,
                        })
                    }
                } catch (error) {
                    res.status(422).json({ "message": error.message });
                    isError = true;
                }
            })
            setTimeout(function () {
                if (!isError) {
                    res.status(201).json({ "message": "Product Quantity updated successfully" });
                }
            }, 2000);
        }
    } catch (error) {
        return res.status(422).json({ "message": error.message })
    }
}