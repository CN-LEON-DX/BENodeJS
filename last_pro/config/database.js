// Embed mongoose
const mongoose = require('mongoose');
module.exports.connect = async () => {
    try {
        // Connect to database MongoDB
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connect Success !");
    }
    catch (error) {
        console.log("Connect Error: "+ error);
    }
}
