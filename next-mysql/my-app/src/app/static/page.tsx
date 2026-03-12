import { db } from "@/config/db";
export default async function page() {
  const [doctors] = await db.execute("SELECT * FROM doctors");

  if (!doctors || !Array.isArray(doctors)) {
    return <p>No doctors found.</p>;
  }
  return (
    <ul>
      {doctors.map((doctor: any) => (
        <li key={doctor.doctor_id}>{doctor.first_name}</li>
      ))}
    </ul>
  );
}
