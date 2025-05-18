import { NextResponse } from "next/server";
import User from "../../../../../models/User";
import bcrypt from "bcrypt";
import "@/app/database";

export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;

    // Validate the input data
    // Ensure email and password are provided
    if (!email || !password) {
      return NextResponse.json(
        {
          status: "error",
          message: "Email and password are required"
        },
        { status: 400 }
      );
    }

    // Check if the user exists
    const user = await User.query().where({ email }).first();
    if (!user) {
      return NextResponse.json(
        {
          status: "error",
          message: "User not found"
        },
        { status: 404 }
      );
    }

    // check password 
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        {
          status: "error",
          message: "Invalid password"
        },
        { status: 401 }
      );
    }

    if (user) {
      // Return the user data
      return NextResponse.json(
        {
          status: "success",
          message: "Sign-in successful",
          user: user
        },
        { status: 200 }
      );
    }else{
      return NextResponse.json(
        {
          status: "error",
          message: "Sign-in failed"
        },
        { status: 500 }
      );
    }
}