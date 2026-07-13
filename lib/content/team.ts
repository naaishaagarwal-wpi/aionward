import { team } from "@/content/team";
import type { TeamCategory, TeamMember } from "@/lib/types/content";

/**
 * Team content accessors.
 */
export async function getTeam(): Promise<TeamMember[]> {
  return team;
}

export async function getTeamByCategory(
  category: TeamCategory
): Promise<TeamMember[]> {
  return team.filter((member) => member.category === category);
}

export async function getTeamMemberById(
  id: string
): Promise<TeamMember | null> {
  return team.find((member) => member.id === id) ?? null;
}
