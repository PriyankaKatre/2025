import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "data:image/png;base64,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",
      required: true,
    },
    address: {
      type: Object,
      default: { line1: "", line2: "" },
    },
    gender: {
      type: String,
      default: "Not Selected",
    },
    dob: {
      type: String,
      default: "Not Selected",
    },
    phone: {
      type: String,
      default: "0000000000",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
