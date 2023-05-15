const User = require("../db/models/user")

module.exports = saveproduct = async (req, res) => {
    try {
        const { name, email, address, phone, password, cpassword } = req.body;
        if (!name || !email || !address || !phone || !password || !cpassword) {
            throw new Error("No field should be empty")
        }
        if (password !== cpassword) {
            throw new Error("Passwords do not match")
        }
        if (phone.length > 10 || phone.length < 10) {
            throw new Error("Phone must be 10 characters long only")
        }
        if (isNaN(phone)) {
            throw new Error("Phone must be a number")
        }
        if (name.length > 50 || email.length > 50 || address.length > 50) {
            throw new Error("Name , Email and Address cannot be more than 50 characters long")
        }
        const addUser = new User({ name, email, address, phone, password })
        await addUser.save()
        res.status(201).json({ "message": "User added successfully" })
    } catch (error) {
        const message = error.message
        res.status(422).json({ message })
    }
}