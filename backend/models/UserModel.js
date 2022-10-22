import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide user name."],
     },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
    },
    image: {
      type: String,
    },
    // add other user properties like age, etc here

  },
  {
    timestamps: true, // add automatic timestamps
  }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
