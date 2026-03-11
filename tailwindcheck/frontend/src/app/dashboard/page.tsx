"use client"
import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { getAppointments } from "@/app/actions/appointments";

type Appointment = {
    id: number;
    name: string;
    contactno: string;
    appointmentDate: Date;
    message: string | null;
    createdAt: Date;
};

export default function DashboardPage() {
    const router = useRouter();
    const { data: session, isPending } = useSession();
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loadingAppts, setLoadingAppts] = useState(true);

    useEffect(() => {
        if (!isPending && !session?.user) {
            router.push("/sign-in");
        }
    }, [isPending, session, router]);

    useEffect(() => {
        if (session?.user) {
            getAppointments()
                .then(setAppointments)
                .finally(() => setLoadingAppts(false));
        }
    }, [session]);

    if (isPending) return <p className="text-center mt-8 text-white">Loading...</p>;
    if (!session?.user) return <p className="text-center mt-8 text-white">Redirecting...</p>;

    const { user } = session;

    return (
        <main className="max-w-3xl mx-auto p-6 space-y-6 text-black">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <p className="text-sm text-gray-600">Welcome, {user.name}! — {user.email}</p>
                </div>
                <button
                    onClick={() => signOut()}
                    className="bg-white border text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200"
                >
                    Sign Out
                </button>
            </div>

            <section>
                <h2 className="text-xl font-semibold mb-3">All Appointments</h2>

                {loadingAppts ? (
                    <p className="text-gray-500">Loading appointments...</p>
                ) : appointments.length === 0 ? (
                    <p className="text-gray-500">No appointments found.</p>
                ) : (
                    <div className="space-y-3">
                        {appointments.map((appt) => (
                            <div key={appt.id} className="border rounded-lg p-4 bg-white shadow-sm space-y-1">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold">{appt.name}</p>
                                    <span className="text-xs text-gray-400">
                                        {new Date(appt.appointmentDate).toLocaleDateString("en-US", {
                                            weekday: "short",
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">📞 {appt.contactno}</p>
                                {appt.message && (
                                    <p className="text-sm text-gray-500 italic">"{appt.message}"</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}