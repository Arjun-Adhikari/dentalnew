"use server";

import { prisma } from "@/lib/prisma"

export async function submitContactForm(data: {
    name: string;
    contactno: string;
    appointmentDate:string;
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
        return { success: true };
    } catch (error) {
        console.error("DB Error:", error);
        return { success: false, error: "Failed to submit form." };
    }
}