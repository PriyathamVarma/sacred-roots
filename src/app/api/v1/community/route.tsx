// This is the route for the community API
// api/v1/community

import { NextRequest, NextResponse } from "next/server";
import { mongoDB } from "../../../../../shared/lib/db/mongo";
import CommunityModel from "../../../../../shared/models/community";

export async function POST(req: NextRequest) {
  try {
    console.log("Test");
    await mongoDB();
    console.log("Test");
    const body = await req.json();
    console.log("Test 1");
    // Saving the community data from the request

    const name = body.name || "Shamanism";
    const region = body.region || "Scandinavia";
    const members = body.members || 0;
    const color = body.color || "bg-blue-100";
    const description = body.description || "Description";

    const newCommunity = new CommunityModel({
      name: name,
      region: region,
      members: members,
      color: color,
      description: description,
    });

    await newCommunity.save();
    console.log("last Test");
    console.log(newCommunity);
    return NextResponse.json({
      message: `Community ${name} created successfully.`,
      success: true,
      data: newCommunity,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error handling request.",
      success: false,
      error: error,
    });
  }
}
