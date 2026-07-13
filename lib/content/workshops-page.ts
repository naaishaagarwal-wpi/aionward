import { workshopsPageContent } from "@/content/workshops-page";
import type { WorkshopsPageContent } from "@/content/workshops-page";

export async function getWorkshopsPageContent(): Promise<WorkshopsPageContent> {
  return workshopsPageContent;
}
