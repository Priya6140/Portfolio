// app/api/contact/route.ts

import { sendMailFromNodemailer } from "@/utils/send-mail";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    await sendMailFromNodemailer(
      `New Request From ${name}`,
      email,
      message,
      name
    );

    // Return a success response
    return NextResponse.json(
      { message: "Mail sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
