import { aiVisionariesPageContent } from "@/content/ai-visionaries";
import type { AiVisionariesPageContent } from "@/content/ai-visionaries";

export async function getAiVisionariesPageContent(): Promise<AiVisionariesPageContent> {
  return aiVisionariesPageContent;
}
