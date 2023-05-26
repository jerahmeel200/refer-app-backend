import mongoose from "mongoose";
const { Schema } = mongoose;

export const RefferalSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  level1Parent: {
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  level2Parent: {
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  level3Parent: {
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  children: {
    level1Child: {
      childId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
    level2Child: {
      childId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
    level3Child: {
      childId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  },
});

export default mongoose.model.Refferals ||
  mongoose.model("Refferal", RefferalSchema);
