// const User = require("../db/models/user")


module.exports = logout = async (req, res) => {
    try {
        res.clearCookie("gold", { path: "/" });
        res.status(200).json({ "message": "user logout was successful" });
    } catch (error) {
        console.log(error)
        res.status(422).json({ "message": error.message })
    }
}