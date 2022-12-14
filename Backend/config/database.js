const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const ConnectDB = async () => {
    try {
      await mongoose.connect(db, {
        useNewUrlParser: true
      });
      console.log('MongoDB connected...');
    } catch(err) {
        console.error(err.message);
        //Exit process with failure
        process.exit();
    }
}

module.exports = ConnectDB;