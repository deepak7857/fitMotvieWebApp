const mongoose =require("mongoose");
const couponSchema= new mongoose.Schema({
  email:{
      type:String,
      unique:true
  },
  couponCode:{
    type:String,
    unique:true,
  },
},
  {timestamps:true}
)
export default mongoose.models.coupon || mongoose.model("coupon",couponSchema)