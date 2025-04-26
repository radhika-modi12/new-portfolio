
import blogDetail from "../../lib/models/models";
import connectMongoDB from "../../lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name,email,phone} = await request.json();
        await connectMongoDB();         
        await blogDetail.create({ name,email,phone});
        return NextResponse.json({ message: "blog Created" }, { status: 201 });
    } catch (error) {
        console.log({error})
        return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const blogs = await blogDetail.find();
        return NextResponse.json({ blogs });
    } catch (error) {
        console.error("Error retrieving tasks:", error);
        return NextResponse.json({ error: "Failed to retrieve tasks" }, { status: 500 });
    }
}