// shared/lib/db/mongo.tsx

// This is for database connection using mongodb

import * as mongoose from "mongoose";
// Loading ENV variables
require("dotenv").config();

// connect the db
const MONGODB_URI = process.env.MONGODB_URI as string;

export const mongoDB = () => {
  mongoose
    .connect(
      // Need to change this for future connections
      MONGODB_URI,
      {
        serverSelectionTimeoutMS: 30000,
        socketTimeoutMS: 45000, // 45 seconds
      },
    )
    .then(() => {
      console.log("SacredRoots DB Connected");
      //console.log(DB);
    })
    .catch((err: any) => {
      console.log("Error while connecting SacredRoots DB \n", err);
    });
};
