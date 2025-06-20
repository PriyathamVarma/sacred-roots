import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/user";

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["elder", "follower", "priest", "guardian", "student"],
      default: "follower",
    },
    country: { type: String, required: true },
    joinedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);
const UserModel =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default UserModel;
