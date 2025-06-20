import { NextRequest, NextResponse } from "next/server";
import { mongoDB } from "../../../../../../shared/lib/db/mongo";
import UserModel from "../../../../../../shared/models/user";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    await mongoDB();
    const body = await req.json();

    const { name, email, role, country, password } = body;

    if (!name || !email || !role || !country || !password) {
      return NextResponse.json(
        { message: "All fields are required", success: false },
        { status: 400 },
      );
    }

    // Optional: Check if email already exists
    const existing = await UserModel.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { message: "User with this email already exists", success: false },
        { status: 409 },
      );
    }
    // If the user does not exist, create a new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      name,
      email,
      role,
      country,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({
      message: "User joined successfully",
      success: true,
      data: newUser,
    });
  } catch (error) {
    console.error("Join API Error:", error);
    return NextResponse.json(
      { message: "Server error", success: false, error },
      { status: 500 },
    );
  }
}
