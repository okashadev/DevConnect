import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "../../../../../models/User";
import "@/app/database";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      username,
      email,
      password,
      phone_number,
    } = body;

    // Validate the input data
    if (!name || !username || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if the Email already exists
    const emailCheck = await User.query().where({ email }).first();
    if (emailCheck) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    // Check if the Username already exists
    const usernameCheck = await User.query().where({ username }).first();
    if (usernameCheck) {
      return NextResponse.json(
        { message: "Username already exists" },
        { status: 400 }
      );
    }

    // Check if the Phone number already exists
    if (phone_number) {
      const phoneCheck = await User.query().where({ phone_number }).first();
      if (phoneCheck) {
        return NextResponse.json(
          { message: "Phone number already exists" },
          { status: 400 }
        );
      }
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await User.query().insert({
      name,
      username,
      email,
      password: hashedPassword,
      phone_number,
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        user,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error in registration:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
