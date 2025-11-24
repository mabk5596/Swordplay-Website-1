export interface Game {
  id: string;
  title: string;
  logo: string;
  tagline: string;
  description: string;
  features: string[];
  featureDetails?: string[];
  KeyFeatures?: string[];
  images: string[];
}

import nsx198x from "@/assets/NSX198x/NS198x_Logo.jpg";
import MB2130 from "@/assets/Mind_Break/MindBreak_Logo.png";
import MB2130Feature1 from "@/assets/Mind_Break/MB2130-feature1.jpg";
import MB2130Feature2 from "@/assets/Mind_Break/MB2130-feature2.jpg";
import MB2130Feature3 from "@/assets/Mind_Break/MB2130-feature3.jpg";
import nsx198xFeature1 from "@/assets/NSX198x/NSX198Xfeature1.jpg";
import nsx198xFeature2 from "@/assets/NSX198x/NSX198Xfeature2.jpg";
import nsx198xFeature3 from "@/assets/NSX198x/NSX198Xfeature3.jpg";
import nsx198xFeature4 from "@/assets/NSX198x/NSX198Xfeature4.jpg";


export const games: Game[] = [
  {
    id: "nightshift198x",
    title: "NightShift 198X",
    logo: nsx198x,
    tagline: "Survival horror job simulation with a unique twist",
    description: "Punch the clock for a nightmare shift in NightShift 198X, a multiplayer horror job-sim set in a lonely gas station off a forgotten highway. Team up with up to four players, each with a critical role—from Cashier to Manager—and survive the eight-hour shift. With a striking Retro Horror Aesthetic, VHS filters, and Dynamic Monsters whose AI learns from your behavior, every Random Event Night is a new, stream-friendly descent into terror that pays homage to 80s synth and local legends.",
    features: [
      "Clock In. Don't Clock Out.",
      "Your Role, Your Doom.",
      "VHS Terror, AI That Learns.",
    ],
    featureDetails: [
      "Welcome to the graveyard shift at a lonely, forgotten gas station in 198X. This isn't just a job; it’s a terrifying multiplayer horror job-sim where you and your crew must balance mundane duties with the unspeakable. Every action matters, because between 10 PM and 6 AM, your one mistake can doom the entire team.",
      "Play as the Cashier, Janitor, Pump Attendant, or Manager—each with specific tasks, tools, and a unique path to survival... or a brutal end.",
      "Immerse yourself in a gripping Retro Horror Aesthetic, complete with the grainy visuals of CRT filters and an unsettling synth soundtrack. Be warned: our monsters are dynamic. Their AI learns from player behavior, meaning the hiding spot that saved you once will be their target the next. Adapt, or perish.",
    ],
    images: [
     nsx198xFeature1,
     nsx198xFeature2,
     nsx198xFeature3,
     nsx198xFeature4 
    ],
    KeyFeatures: [
"- 1–4 Player Online Co-Op: Survive the night together or die trying. Every role matters.",
"- Procedural Night Events: No two shifts play the same — random hauntings, power cuts, and customer encounters keep players guessing.",
"- Monster Evolution System: Enemies adapt to player behavior, forcing fresh tactics every run.",
"- Retro VHS Horror Aesthetic: Grain filters, analog UI, and 80s-style ambience inspired by real gas-station folklore.",
"- Job Simulation Meets Terror: Routine tasks,  mopping floors, fixing pumps, checking CCTV, and handling customers, become survival tests when the night turns.",
"- Streamer-Ready Design: Built for reaction moments, short-form content, and viral replayability.",
"- Upgradeable Tools & Roles: Unlock new gadgets and skills after each completed shift.",
"- ⁠Global + Local Folklore Fusion: Western-style horror structure meets regional myths and spiritual dread.",
"- Planned Post-Launch Content: DLC, new encounters, new monsters, seasonal events, and custom night modes."
    ]
  },
  {
    id: "mindbreak-riyadh-2130",
    title: "MindBreak: Riyadh 2130",
    logo: MB2130,
    tagline: "Night shift in a dystopian cyberpunk world",
    description: "What if the only way to heal a mind... was to break your own? In MindBreak: Riyadh 2130, you are a psychiatrist cursed with the ability to enter your patients’ psychoscapes: surreal, shifting worlds of trauma and fear within a neon-drenched, future Saudi metropolis. Built in Unreal Engine 5, this cinematic horror thriller seamlessly fuses investigation and visceral combat as you risk your own sanity to find the truth, one fractured mind at a time.",
    features: [
      "Dive into the Fracture of the Future.",
      "Psyche-Bending Gameplay Loop.",
      "A New Vision of Cinematic Horror.",
    ],
    featureDetails: [
      "Step into Riyadh 2130, a neon-drenched Saudi metropolis built on advanced faith-tech and collective consciousness. Play as Dr. Dan Al-Hassan, a psychiatrist with the cursed gift of entering his patients' psychoscapes. Each case forces you to descend into surreal reflections of trauma and guilt, not just to heal them, but to confront the secrets buried within your own mind.",
      "Every patient's mind is a dynamic, shifting world where reality bends. The experience seamlessly fuses psychological horror with narrative depth, demanding players master a mix of investigation, puzzle-solving, and visceral combat against the terrifying manifestations of raw fear. Your choices in the city and the mind-worlds will ripple, fundamentally changing the story and Dr. Al-Hassan’s survival.",
      "Built in Unreal Engine 5, MindBreak delivers a high-fidelity cinematic experience inspired by modern masters like Alan Wake 2 and Silent Hill 2 Remake. This is a Saudi-made game that dares to ask: 'What if the only way to heal a mind… was to break your own?' Prepare for a journey that explores what sanity truly means in an age obsessed with perfection."
    ],
    images: [
      MB2130Feature1,
      MB2130Feature2,
      MB2130Feature3
    ]
  },
  {
    id: "boundless",
    title: "Boundless",
    logo: "", // Add logo when available
     tagline: "Upcoming Project",
    description: "Upcoming Project",
    features: [],
    images: []
  },
  {
    id: "mindbreak-cortex-crew",
    title: "Mindbreak Cortex Crew",
    logo: "", // Add logo when available
    tagline: "Upcoming Project",
    description: "Upcoming Project",
    features: [],
    images: []
  }
];
