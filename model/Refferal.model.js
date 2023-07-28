import mongoose from "mongoose";
const { Schema } = mongoose;

export const RefferalSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },

  plan: { type: String, enum: ["2000", "5000", "10000"] },

  planDueForWithdrawal: {
    type: Boolean,
    default: false,
  },

  paymentStatus: {
    type: String,
    enum: ["pending", "success", "failed"],
    default: "pending",
  },

  parent: {
    parentType: { type: String, enum: ["admin", "user"], default: "admin" },
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  grandParent: {
    grandParentType: {
      type: String,
      enum: ["admin", "user"],
      default: "admin",
    },
    grandParentId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  greatGrandParent: {
    greatGrandParentType: {
      type: String,
      enum: ["admin", "user"],
      default: "admin",
    },
    greatGrandParentId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  // EXPECT TO HAVE A 5 MAX
  children1: [
    {
      childId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],

  // EXPECT TO HAVE A 25 MAX
  children2: [
    {
      childId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],

  // EXPECT TO HAVE A 50 MAX
  children3: [
    {
      childId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

export default mongoose.model.Refferals ||
  mongoose.model("Refferal", RefferalSchema);
