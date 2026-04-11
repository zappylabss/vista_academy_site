"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
  name: string;
  phone: string;
  course: string;
  branch: string;
}) {
  try {
    const { name, phone, course, branch } = formData;

    const { data, error } = await resend.emails.send({
      from: "Vista Academy <onboarding@resend.dev>", // Note: For production, use a verified domain
      to: ["pravinvista.slm@gmail.com"],
      subject: `New Admission Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #003366;">New Inquiry Received</h2>
          <p>You have a new student inquiry from the website contact form.</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Course:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${course}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Branch:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${branch}</td>
            </tr>
          </table>
          
          <p style="margin-top: 20px; font-size: 12px; color: #666;">
            This email was sent from the Vista Academy Contact Form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Server Action Error:", err);
    return { success: false, error: "Internal server error" };
  }
}
