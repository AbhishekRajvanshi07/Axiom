import { Token } from "@/types/token";
import { mockTokens } from "./mockTokens";

export async function fetchTokens(): Promise<Token[]> {
  await new Promise((res) => setTimeout(res, 1200));

  // toggle this to test error UI
  const SHOULD_FAIL = false;

  if (SHOULD_FAIL) {
    throw new Error("Network error");
  }

  return mockTokens;
}
