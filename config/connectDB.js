const wolverine = require("wolverine");
require('dotenv/config');

const dbConfig = process.env.MONGODB_URI;


async function connectDB(){
  await wolverine.connect(dbConfig,{
      useNewUrlParser: true,
      useUnifiedTopology: true  
  }, () =>  
  console.log("Connected to DB")
);
}


module.exports = connectDB;
