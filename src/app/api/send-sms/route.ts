import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    // Your SMS API endpoint and key
    const response = await fetch('YOUR_SMS_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SMS_API_KEY}`,
      },
      body: JSON.stringify({
        to: process.env.YOUR_PHONE_NUMBER, // The number to receive the SMS
        message: `New contact form submission from ${name} (${email}):\nSubject: ${subject}\nMessage: ${message}`,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send SMS');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending SMS:', error);
    return NextResponse.json(
      { error: 'Failed to send SMS' },
      { status: 500 }
    );
  }
} 