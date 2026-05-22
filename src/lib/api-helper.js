/**
 * Dynamically resolves the API base URL.
 * 
 * - Server-side (SSR / Static Prerendering): Returns the absolute backend URL (required by Node's fetch).
 * - Client-side (Browser): Returns the relative path to route through the Next.js reverse-proxy rewrite,
 *   which establishes cookies as same-origin (first-party) and solves cross-domain cookie blocks.
 */
export function getApiUrl() {
  if (typeof window !== "undefined") {
    return "/api/pets";
  }
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:2006/pets";
}
