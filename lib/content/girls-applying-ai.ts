import { girlsApplyingAiPageContent } from "@/content/girls-applying-ai";
import type { GirlsApplyingAiPageContent } from "@/content/girls-applying-ai";

export async function getGirlsApplyingAiPageContent(): Promise<GirlsApplyingAiPageContent> {
  return girlsApplyingAiPageContent;
}
