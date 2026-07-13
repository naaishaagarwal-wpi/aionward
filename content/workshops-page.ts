/**
 * Workshops index page intro — no fabricated workshop entries.
 * Workshop records live in content/workshops.ts.
 */

export type WorkshopsPageContent = {
  title: string;
  lead: string;
  annotation: string;
};

export const workshopsPageContent: WorkshopsPageContent = {
  title: "Workshops",
  lead: "Hands-on learning experiences across generations — documented as they happen.",
  annotation: "A living record of who is learning.",
};
