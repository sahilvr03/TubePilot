import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGO_URI;
let client;
let db;

async function connectDB() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db("mydatabase");
  }
  return db;
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const database = await connectDB();
    const collection = database.collection("leads");

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...body, updatedAt: new Date() } }
    );

    if (result.modifiedCount > 0) {
      return NextResponse.json({ message: "Lead updated successfully ✅" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Lead not found" }, { status: 404 });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error updating lead" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    const database = await connectDB();
    const collection = database.collection("leads");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount > 0) {
      return NextResponse.json({ message: "Lead deleted successfully ✅" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Lead not found" }, { status: 404 });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error deleting lead" }, { status: 500 });
  }
}