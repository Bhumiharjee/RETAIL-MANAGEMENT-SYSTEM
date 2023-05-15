const mongoose = require("mongoose");

mongoose.connect(process.env.DB2, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Connection Successful to DataBase`);
}).catch((err) => {
    console.log(`Cannot Connect to DataBase ==>> ${err}`);
})
