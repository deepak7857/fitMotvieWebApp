const mongoose = require("mongoose");

const connectSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    mobileNumber: {
      type: Number,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    level: {
      type: String,
      require: true,
      enum: ["beginner", "intermediate", "pro"],
    },
    userType: {
      type: String,
      require: true,
      enum: ["seller", "buyer"],
    },
  },
  { timestamps: true }
);
export default mongoose.models.signup ||mongoose.model("signup", connectSchema);
