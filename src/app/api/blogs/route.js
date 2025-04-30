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

export async function GET(request) {
  try {    
    await connectMongoDB();
    const blogData =await blogDetail.find()
    return NextResponse.json({ message: "blog get",list:blogData }, { status: 201 });
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      { error: "Failed to get blog" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {    
    const {id,name,email,phone} =await request.json()
    await connectMongoDB();
    const user_set ={name,email,phone}
    const blogData =await blogDetail.findByIdAndUpdate(id,user_set,{new:true})
    return NextResponse.json({ message: "blog update",list:blogData }, { status: 201 });
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {    
    const {id} =await request.json()
    await connectMongoDB();    
    const blogData =await blogDetail.findByIdAndDelete(id)
    return NextResponse.json({ message: "blog delete",list:blogData }, { status: 201 });
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}