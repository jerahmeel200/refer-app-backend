// import mongoose from "mongoose";
// const connect = async () => {
//   try {
//     mongoose.connect = process.env.MONGO_URI;

//     console.log("mongoDb Connected");
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// export default connect;

import mongoose from "mongoose";

export default async () => {
  // mongodb connection option
  const options = {
    useNewUrlParser: true,
    autoIndex: process.env.NODE_ENV === "development",
    useUnifiedTopology: true,
  };

  // create the connections
  const connection = await mongoose.connect(
    "mongodb+srv://jamico:jamico@cluster0.hyxju.mongodb.net/?retryWrites=true&w=majority",
    options
  );

  return connection.connection.db;
};
