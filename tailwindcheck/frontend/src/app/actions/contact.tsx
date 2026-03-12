"use server";

import { prisma } from "@/lib/prisma";
import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY!,
});


export async function submitContactForm(data: {
    name: string;
    contactno: string;
    appointmentDate: string;
    message: string;
}): Promise<{ success: boolean; error?: string }> {
    try {
        await prisma.contactSubmission.create({
            data: {
                name: data.name,
                contactno: data.contactno,
                message: data.message,
                appointmentDate: new Date(data.appointmentDate),
            },
        });


        // 2. Send email to doctor
        await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
            from: `Appointments <noreply@${process.env.MAILGUN_DOMAIN}>`,
            to: ["basnetarun09@gmail.com"], // 👈 replace with doctor's email
            subject: `New Appointment Request – ${data.name}`,
            html: `
        <h2>New Appointment Booked</h2>
        <p><strong>Patient Name:</strong> ${data.name}</p>
        <p><strong>Contact No:</strong> ${data.contactno}</p>
        <p><strong>Preferred Date & Time:</strong> ${new Date(data.appointmentDate).toLocaleString()}</p>
        <p><strong>Reason for Visit:</strong> ${data.message}</p>
      `,
        });


        return { success: true };
    } catch (error) {
        console.error("DB Error:", error);
        return { success: false, error: "Failed to submit form." };
    }
}