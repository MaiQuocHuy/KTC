import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/database/db";
import { Product } from "@/types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");
    const category = searchParams.get("category");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "12");
    const offset = (page - 1) * limit;

    let query = "SELECT * FROM products WHERE is_active = 1";
    const params: any[] = [];

    if (search) {
      query += " AND (name LIKE ? OR description LIKE ?)";
      params.push(`%${search}%`, `%${search}%`);
    }

    if (category) {
      query += " AND category = ?";
      params.push(category);
    }

    query += " ORDER BY created_at DESC LIMIT ? OFFSET ?";
    params.push(limit, offset);

    const stmt = db.prepare(query);
    const products = stmt.all(...params) as any[];

    // Parse images JSON for each product
    const formattedProducts: Product[] = products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      images: JSON.parse(product.images || "[]"),
      stock: product.stock,
      isActive: Boolean(product.is_active),
      createdAt: new Date(product.created_at),
      updatedAt: new Date(product.updated_at),
    }));

    // Get total count for pagination
    let countQuery =
      "SELECT COUNT(*) as total FROM products WHERE is_active = 1";
    const countParams: any[] = [];

    if (search) {
      countQuery += " AND (name LIKE ? OR description LIKE ?)";
      countParams.push(`%${search}%`, `%${search}%`);
    }

    if (category) {
      countQuery += " AND category = ?";
      countParams.push(category);
    }

    const countStmt = db.prepare(countQuery);
    const { total } = countStmt.get(...countParams) as any;

    return NextResponse.json({
      success: true,
      data: {
        products: formattedProducts,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    console.error("Products API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: { code: "INTERNAL_ERROR", message: "Internal server error" },
      },
      { status: 500 }
    );
  }
}
