"use client"
import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { getAppointments, deleteAppointment } from "@/app/actions/appointments";

export default function DashboardPage() {
    const router = useRouter();
    const { data: session, isPending } = useSession();
    const [appointments, setAppointments] = useState<any[]>([]);
    const [loadingAppts, setLoadingAppts] = useState(true);

    // --- State for the Custom Modal ---
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

    useEffect(() => {
        if (!isPending && !session?.user) router.push("/sign-in");
    }, [isPending, session, router]);

    useEffect(() => {
        if (session?.user) {
            getAppointments().then(setAppointments).finally(() => setLoadingAppts(false));
        }
    }, [session]);

    // Toast Timer
    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    // 1. Open Modal instead of browser confirm
    const openDeleteModal = (id: number) => {
        setSelectedId(id);
        setIsModalOpen(true);
    };

    // 2. The actual delete logic
    const confirmDelete = async () => {
        if (!selectedId) return;
        try {
            await deleteAppointment(selectedId);
            setAppointments((prev) => prev.filter((appt) => appt.id !== selectedId));
            setToast({ message: "Appointment deleted!", type: "success" });
        } catch (error) {
            setToast({ message: "Error deleting.", type: "error" });
        } finally {
            setIsModalOpen(false);
            setSelectedId(null);
        }
    };

    if (isPending || !session?.user) return <p className="text-center mt-8 text-white">Loading...</p>;

    return (
        <main className="max-w-3xl mx-auto p-6 space-y-6 text-black relative">

            {/* --- CUSTOM MODAL (Replaces the "localhost says" popup) --- */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
                        <h3 className="text-lg font-bold mb-2">Confirm Delete</h3>
                        <p className="text-gray-600 mb-6">Are you sure? This action cannot be undone.</p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* --- TOAST NOTIFICATION --- */}
            {toast && (
                <div className={`fixed top-5 right-5 px-6 py-3 rounded-md shadow-lg z-50 text-white ${toast.type === "success" ? "bg-green-600" : "bg-red-600"
                    }`}>
                    {toast.message}
                </div>
            )}

            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <button onClick={() => signOut()} className="border px-4 py-2 rounded-md hover:bg-gray-100">Sign Out</button>
            </div>

            <div className="space-y-3">
                {appointments.map((appt) => (
                    <div key={appt.id} className="border rounded-lg p-4 bg-white flex justify-between items-center shadow-sm">
                        <div>
                            <p className="font-semibold">{appt.name}</p>
                            <p className="text-sm text-gray-500">{appt.contactno}</p>
                        </div>
                        <button
                            onClick={() => openDeleteModal(appt.id)}
                            className="text-red-600 bg-red-50 px-3 py-1 rounded-md hover:bg-red-100"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}