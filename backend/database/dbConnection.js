import mongoose from "mongoose";

const dbConnection=async()=>{
     await mongoose.connect(process.env.MONGO_URI,{
        dbName:"NAUKRILO"

    }).then(()=>{
        console.log('Connected')
    }).catch((err)=>{
        console.log(err)
    })
}

export default dbConnection