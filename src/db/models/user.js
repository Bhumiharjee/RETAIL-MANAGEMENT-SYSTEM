const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const newUser = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
    },
    // date: {
    //     type: String,
    //     required: true,
    // }
});


// Creating Tokens
newUser.methods.generateToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY, { expiresIn: "3h" });
        this.token = token
        await this.save();
        return token;
    } catch (error) {
        res.status(422).json({ "message": error.message })
    }
}

// Hashing Password
newUser.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})


const User = new mongoose.model("User", newUser);

module.exports = User;