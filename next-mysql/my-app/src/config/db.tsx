import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "hospital_db",
});

try {
  const connection = await db.getConnection();
  console.log("Database connection successful!");
  connection.release();
} catch (err) {
  console.error("Database connection failed:", err);
  process.exit(1);
}
