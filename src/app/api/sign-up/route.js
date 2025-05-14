import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/database";
import User from "../../../../models/User";

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    return NextResponse.json(
        { 
            message: "User created successfully",
            user: {
                email,
                password,
            },
        },
        { status: 201 }
    );

    // // Check if the user already exists
    // const existingUser = await User.findOne({ email });
}