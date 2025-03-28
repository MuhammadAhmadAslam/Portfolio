import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB"; 

export async function POST(req) {
    await connectDB() 
    try {
        const { to, subject, message } = await req.json();

        if (!to || !subject || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "gmail", // Example: Gmail (You can use SMTP too)
            auth: {
                user: process.env.EMAIL_USER, // Use environment variables
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text: message, 
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully", info });
    } catch (error) {
        console.error("Email Error:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
