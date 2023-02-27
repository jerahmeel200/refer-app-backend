import mongoose from "mongoose";
const connect = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://jamico:jamico@cluster0.hyxju.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("mongoDb Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connect;
