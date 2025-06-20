// Interfaces for community

export interface ICommunity {
  _id?: string; // MongoDB ObjectId
  name: string;
  region: string;
  members: number;
  color: string;
  description: string;
  spiritualFocus?: string;
  sacredElements?: string;
  currentFocus?: string;
  initiatives?: IInitiative[];
  elders?: IElder[];
}

export interface IInitiative {
  id?: string;
  title: string;
  description: string;
  date: string;
  participants: number;
}

export interface IElder {
  name: string;
  role: string;
  bio: string;
}
