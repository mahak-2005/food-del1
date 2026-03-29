import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://mahakgupta177_db_user:1914@ac-qbijdbr-shard-00-00.hgkyjs5.mongodb.net:27017,ac-qbijdbr-shard-00-01.hgkyjs5.mongodb.net:27017,ac-qbijdbr-shard-00-02.hgkyjs5.mongodb.net:27017/food-del?ssl=true&replicaSet=atlas-yqvimz-shard-0&authSource=admin&retryWrites=true&w=majority",
      {
        tls: true,
        tlsAllowInvalidCertificates: true
      }
    );
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};