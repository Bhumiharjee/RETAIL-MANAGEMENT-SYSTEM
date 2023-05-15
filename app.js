require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8000;

//Import Routes
const products = require("./src/routes/products");
const sales = require("./src/routes/sales");
const login = require("./src/routes/login");
const logout = require("./src/routes/logout");
const signup = require("./src/routes/signup");

//Middleware
const userAuth = require("./src/middleware/userAuth")

app.use(cookieParser());
app.use(cors())

// FOR EXPRESS SPECIFIC STUFF
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// DATABASE RELATED STUFF
require("./src/db/connection");

// User Routes
app.use("/products", userAuth, products);
app.use("/sales", userAuth, sales);
app.use("/login", login);
app.use("/logout", logout);
app.use("/signup", signup);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}


// START THE SERVER
app.listen(port, () => {
    console.log(`Website has been successfully started on port ${port}`);
});