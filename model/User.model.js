import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide unique Username"],
    unique: [true, "Username Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide a unique email"],
    unique: true,
  },
  verified: { type: Boolean, default: false },
  emailVerificationCode: String,
  firstName: { type: String },
  lastName: { type: String },
  mobile: { type: String },
  address: { type: String },

  bankDetails: {
    accountName: String,
    bankName: String,
    accountNumber: String,
  },
});

export default mongoose.model.Users || mongoose.model("User", UserSchema);
