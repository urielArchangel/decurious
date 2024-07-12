import { connections, connect } from "mongoose";

export const connectMongo = async () => {
  if (!connections[0].db) {
    console.log("connecting")
    const uri = process.env.mongourl;

    await connect(uri);
    console.log("connected")

  }
  return ;
};

const disconnect = async () => {
  // Add logic to disconnect from MongoDB when needed (optional)
  // await mongoose.disconnect();
};
