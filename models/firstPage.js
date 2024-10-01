const mongoose =require("mongoose");
const connectSchema= new mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    age:{
        type:Number,
        required:true
        },
    height:{
        type:Number,
        required:true

    },
    weight:{
        type:Number,
        required:true,
    },
    gender:{
            type:String,
            required:true,
            enum:["Male","Female","Other"]
    },
    medCondn:{
      type:String,
    }
    },
 {timeStamp:true}
);
export default mongoose.models.firstPage || mongoose.model("firstPage",connectSchema)