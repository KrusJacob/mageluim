import { SKILLS_COMMON } from "./skills_common";
import { SKILLS_EPIC } from "./skills_epic";
import { SKILLS_LEGENDARY } from "./skills_legendary";
import { SKILLS_RARE } from "./skills_rare";

export const ALL_SKILL_LIST = [...SKILLS_COMMON, ...SKILLS_RARE, ...SKILLS_EPIC, ...SKILLS_LEGENDARY];

// Common:
// FIRE - 2
// WATER - 2
// WIND - 1
// FOREST - 1
// DARK - 1
// LIGHT - 0
// PHYSICAL - 2

// Rare:
// FIRE - 2
// WATER - 1
// WIND - 2
// FOREST - 1
// DARK - 0
// LIGHT - 1
// PHYSICAL - 3

// Epic:
// FIRE - 0
// WATER - 1
// WIND - 3
// FOREST - 2
// DARK - 1
// LIGHT - 1
// PHYSICAL - 2

// Legendary:
// FIRE - 1
// WATER - 1
// WIND - 0
// FOREST - 1
// DARK - 1
// LIGHT - 1
// PHYSICAL - 0
