import connectMongoDB from "../../lib/mongodb";
import blogDetail from "../../lib/models/models";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, phone } = await request.json();
    await connectMongoDB();
    const blogData =await blogDetail.create({ name, email, phone });
    return NextResponse.json({ message: "blog Created" }, { status: 201 });
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
