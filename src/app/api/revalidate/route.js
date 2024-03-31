import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export const dynamic = 'force-dynamic';
export async function POST() {
  revalidateTag("prismic");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
