import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    quanty:{
        type:String,
        require:true
    }
})

export default mongoose.model('Product', productSchema)