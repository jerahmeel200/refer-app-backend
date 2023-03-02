import mongoose from "mongoose";
const connect = async () => {
  try {
    mongoose.connect = process.env.MONGO_URI;

    console.log("mongoDb Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connect;
