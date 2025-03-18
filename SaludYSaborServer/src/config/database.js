const mongoose = require("mongoose");
require("dotenv").config()

const mongooseConnectionDB = async () => {
    try {
        const db = await mongoose.connect(process.env.DATABASE_URL);
        console.log(`Connect to database ${db.connection.name}`); 
    } catch (err) {
        console.log(err);
        process.exit(1);
        
    }
};

module.exports = mongooseConnectionDB;