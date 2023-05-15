const jwt = require("jsonwebtoken");
const User = require("../db/models/user");

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.gold;
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({ _id: verifyUser._id })
        if (user.length <= 0) {
            throw new Error("authentication failed");
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ "message": error.message });
    }
}

module.exports = auth;