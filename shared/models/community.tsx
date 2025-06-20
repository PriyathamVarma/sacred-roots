// Models for community

import mongoose from "mongoose";
import { ICommunity, IInitiative, IElder } from "../interfaces/community";

const ElderSchema = new mongoose.Schema<IElder>({
  name: String,
  role: String,
  bio: String,
});

const InitiativeSchema = new mongoose.Schema<IInitiative>({
  id: String,
  title: String,
  description: String,
  date: String,
  participants: Number,
});

const CommunitySchema = new mongoose.Schema<ICommunity>({
  name: String,
  region: String,
  members: Number,
  color: String,
  description: String,
  spiritualFocus: String,
  sacredElements: String,
  currentFocus: String,
  initiatives: [InitiativeSchema],
  elders: [ElderSchema],
});

const CommunityModel =
  mongoose.models.Community || mongoose.model("Community", CommunitySchema);

export default CommunityModel;
