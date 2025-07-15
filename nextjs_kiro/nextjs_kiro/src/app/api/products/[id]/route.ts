import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/database/db";
import { Product } from "@/types";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const stmt = db.prepare(
      "SELECT * FROM products WHERE id = ? AND is_active = 1"
    );
    const product = stmt.get(params.id) as any;

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "NOT_FOUND", message: "Product not found" },
        },
        { status: 404 }
      );
    }

    const formattedProduct: Product = {
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
    };

    return NextResponse.json({
      success: true,
      data: formattedProduct,
    });
  } catch (error) {
    console.error("Product API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: { code: "INTERNAL_ERROR", message: "Internal server error" },
      },
      { status: 500 }
    );
  }
}
