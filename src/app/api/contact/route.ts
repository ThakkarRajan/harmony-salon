import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  whatsapp: z.string().min(10, 'Please enter a valid phone number'),
  date: z.string().optional(),
  venue: z.string().optional(),
  services: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Log the contact form submission
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      ...validatedData,
    });

    // TODO: Implement email sending logic here
    // Example with Nodemailer, SendGrid, or other email service:
    /*
    await sendEmail({
      to: process.env.CONTACT_EMAIL || 'info@harmonysalon.com',
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>WhatsApp:</strong> ${validatedData.whatsapp}</p>
        <p><strong>Event Date:</strong> ${validatedData.date || 'Not specified'}</p>
        <p><strong>Venue:</strong> ${validatedData.venue || 'Not specified'}</p>
        <p><strong>Services:</strong> ${validatedData.services || 'Not specified'}</p>
        <p><strong>Message:</strong> ${validatedData.message || 'No message'}</p>
      `,
    });

    // Send auto-reply to customer
    await sendEmail({
      to: validatedData.whatsapp, // Assuming this is an email; adjust as needed
      subject: 'Thank you for contacting Harmony Salon',
      html: `
        <h2>Thank you for your inquiry, ${validatedData.name}!</h2>
        <p>We've received your message and will get back to you within 24 hours via WhatsApp.</p>
        <p>For urgent inquiries, please WhatsApp us at +91-98765 43210.</p>
        <p>Best regards,<br>Harmony Salon Team</p>
      `,
    });
    */

    // For now, just return a success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us! We\'ll get back to you shortly.',
        data: {
          name: validatedData.name,
          whatsapp: validatedData.whatsapp,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.errors.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Handle other errors
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again.',
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed. Please use POST.' },
    { status: 405 }
  );
}

