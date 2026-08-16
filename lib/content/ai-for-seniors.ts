import { aiForSeniorsPageContent } from "@/content/ai-for-seniors";
import type { AiForSeniorsPageContent } from "@/content/ai-for-seniors";

export async function getAiForSeniorsPageContent(): Promise<AiForSeniorsPageContent> {
  return aiForSeniorsPageContent;
}
