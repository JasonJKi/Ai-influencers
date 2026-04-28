export type Platform = "instagram" | "tiktok" | "x" | "youtube_shorts";

export type Persona = {
  name: string;
  handle: string;
  niche: string;
  look: string;
  voice: string;
  values: string[];
  dos: string[];
  donts: string[];
  platforms: Platform[];
};

export const samplePersona: Persona = {
  name: "Nova Reyes",
  handle: "@novareyes.ai",
  niche: "Sustainable streetwear & studio routines",
  look: "Mid-20s, soft natural lighting, warm film grain, muted earth palette",
  voice: "Calm, curious, one strong opinion per post, no hype",
  values: ["craft over hype", "second-hand first", "show the process"],
  dos: ["share the why", "credit collaborators", "use natural light"],
  donts: ["fake giveaways", "engagement bait", "AI-disclaimer-free posts"],
  platforms: ["instagram", "tiktok", "x", "youtube_shorts"],
};
