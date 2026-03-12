"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getAppointments() {
    return await prisma.contactSubmission.findMany({
        orderBy: { appointmentDate: "asc" },
    });
}

export async function deleteAppointment(id: number) {
    try {
        await prisma.contactSubmission.delete({
            where: {
                id: id,
            },
        });

        // Optional: Clears the Next.js cache for the dashboard to ensure data is fresh
        revalidatePath("/dashboard");

        return { success: true };
    } catch (error) {
        console.error("Database Delete Error:", error);
        throw new Error("Failed to delete appointment");
    }
}