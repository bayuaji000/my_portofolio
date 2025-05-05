import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
const fromEmail = process.env.FROM_EMAIL!;

interface RequestBody {
    email: string;
    subject: string;
    message: string;
}

export async function POST(req: Request) {
    const { email, subject, message }: RequestBody = await req.json();
    console.log(email, subject, message);

    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: [fromEmail, email],
            subject: subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Thank you for contacting us!</p>
                    <p>New message submitted:</p>
                    <p>{message}</p>
                </>
            ),
        });

        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message || "Unknown error" });
    }
}
