// app/api/auth/logout/route.ts
import { getSession } from "@/lib/session";

export async function POST(req: Request) {
  const session = await getSession(req);
  await session.destroy();
  return new Response(JSON.stringify({ success: true }));
}
