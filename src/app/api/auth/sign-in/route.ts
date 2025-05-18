import { NextRequest, NextResponse } from "next/server";
import User from "../../../../../models/User";
import bcrypt from "bcrypt";
import "@/app/database";

interface SignInBody {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: SignInBody = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          status: "error",
          message: "Email and password are required",
        },
        { status: 400 }
      );
    }

    const user = await User.query().where({ email }).first();

    if (!user) {
      return NextResponse.json(
        {
          status: "error",
          message: "User not found",
        },
        { status: 404 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        {
          status: "error",
          message: "Invalid password",
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        message: "Sign-in successful",
        user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
