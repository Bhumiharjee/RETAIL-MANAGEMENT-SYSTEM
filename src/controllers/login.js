const User = require("../db/models/user")
const bcrypt = require("bcryptjs");

module.exports = saveproduct = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = await user.generateToken()
            res.cookie("gold", token, {
                expires: new Date(Date.now() + (60 * 60 * 60 * 60))
            });
            res.status(200).json({ "message": "user login success" });
        }
    } catch (error) {
        res.status(422).json({ "message": error.message })
    }
}