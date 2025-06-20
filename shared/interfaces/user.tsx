// User interface
export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: "elder" | "follower" | "priest" | "guardian" | "student";
  country: string;
  joinedAt?: Date;
}
