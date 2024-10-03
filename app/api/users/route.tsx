import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest // used also to prevent caching
) {
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "Bassam" },
  ]);
}
