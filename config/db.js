// Purpose: Connect to MongoDB using mongoose
const mongoose = require('mongoose');
const config = require('./config');
const db = config.mongoURI;

const connectDB = async () => {
    try {
        return await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;