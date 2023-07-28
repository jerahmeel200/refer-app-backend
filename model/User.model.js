import mongoose from "mongoose";
const { Schema } = mongoose;

export const UserSchema = new mongoose.Schema({
  userType: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },

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

  referredBy: {
    type: String,
    enum: ["user", "admin"],
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  // childrenInsideMyNetwork
  // max number is 5
  // the first 5 people that signed up with user's username will join the user network by default
  // the remaining others will join childrenOutsideMyNetwork
  // after a person refferal plan is due for withrawal and withdrawal has been done, the childrenInsideMyNetwork
  // will be reset so that he can start a new plan/refferal network
  childrenInsideMyNetwork: [
    {
      childId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],

  // childrenOutsideMyNetwork
  // no max
  childrenOutsideMyNetwork: [
    {
      childId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

export default mongoose.model.Users || mongoose.model("User", UserSchema);
