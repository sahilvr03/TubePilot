import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // put in .env.local
let client;
let db;

async function connectDB() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db("mydatabase"); // change name
  }
  return db;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const database = await connectDB();
    const collection = database.collection("leads");

    await collection.insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Lead saved successfully ✅" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error saving lead" }, { status: 500 });
  }
}
