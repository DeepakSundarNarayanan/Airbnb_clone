const mongoose = require("mongoose")
async function dbConnect(){
    try{
        await mongoose.connect(process.env.MONGODBURL)
        console.log("dbConnect")
    }

    catch(error){
        console.log(error.message)
    }
}
module.exports=dbConnect