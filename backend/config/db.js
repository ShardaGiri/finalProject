const mongoose = require("mongoose");

//MONGODBCONNECTION
const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/test',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            })
        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
};

module.exports = connectDB;