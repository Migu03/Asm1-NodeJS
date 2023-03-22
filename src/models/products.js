import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

export default mongoose.model('Product', productSchema)