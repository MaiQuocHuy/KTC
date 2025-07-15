import { NextResponse } from "next/server";
import { initializeDatabase } from "@/lib/database/db";

export async function GET() {
  try {
    initializeDatabase();
    return NextResponse.json({
      success: true,
      message: "Database initialized",
    });
  } catch (error) {
    console.error("Database initialization error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to initialize database" },
      { status: 500 }
    );
  }
}
