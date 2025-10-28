export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  team: "art" | "dev" | "sound" | "production" | "leadership" | "marketing" | "animation";
  image: string;
  bio?: string;
}

import MT from "@/assets/Team/Mansour_Althenayan.jpg";
import MH from "@/assets/Team/Moayad_hakeem.jpg";
import AlexP from "@/assets/Team/AlexP.png";
import Prof from "@/assets/Team/prof.jpg"; 
import MG from "@/assets/Team/Marwan_ghamdi.png";
import MS from "@/assets/Team/Md_Siran.jpg";
import MajedG from "@/assets/Team/Majed_ghamdi.jpg";
import BK from "@/assets/Team/Badie_Khan.jpg";
import IB from "@/assets/Team/Ibrahim_banawi.jpg";
import ME from "@/assets/Team/Molham_etr.jpg";
import YM from "@/assets/Team/Yaser_madani.jpg";
import SA from "@/assets/Team/Sara_AlAnazi.jpg";
import AM from "@/assets/Team/Kareem_abdullah.jpg";
import WT from "@/assets/Team/Waad_taqege.png";
import AdrianP from "@/assets/Team/AdrianP.jpg";
import NA from "@/assets/Team/Nawaf_quthami.jpg";
import NoraA from "@/assets/Team/Nora_Alrashid.jpg";
import LK from "@/assets/Team/Leen_Khalil.jpg";
import TK from "@/assets/Team/Tamer_Khalil.jpg";
import AAH from "@/assets/Team/Abdullah_Alhabib.jpg";
import AHZ from "@/assets/Team/AbdulHadi_Zubailah.jpg";
import MAH from "@/assets/Team/Mohammed_Abdulhameed.jpg";

export const teamDescriptions: Record<
  "leadership" | "dev" | "art" | "sound" | "production" | "marketing" | "animation",
  string
> = {
  leadership:
    "Visionaries guiding SwordPlay Studios with passion and expertise, shaping our mission and culture.",
  dev:
    "Our developers turn ideas into reality, building immersive worlds and seamless gameplay.",
  art:
    "The creative minds behind our visuals, crafting stunning environments and memorable characters.",
  sound:
    "Our sound team brings games to life with music, effects, and audio storytelling.",
  production:
    "Production ensures every project runs smoothly, coordinating teams and delivering excellence.",
  marketing:
    "Our marketing team connects SwordPlay Studios with the world, sharing our stories and engaging our community.",
  animation:
    "Animators breathe life into our characters and worlds, creating fluid and captivating motion."
};


export const teamMembers: TeamMember[] = [
  // Leadership Team
  {
    id: "l1",
    name: "Mansour Althenayan",
    designation: "Founder, Director, Game Designer & Writer",
    team: "leadership",
    image: MT,
    bio: "Visionary leader with 15+ years in game development"
  },
  {
    id: "l2",
    name: "Dr. Moayad Hakeem",
    designation: "Co-Founder, COO",
    team: "leadership",
    image: MH,
    bio: "Award-winning game designer and storyteller"
  },
  {
    id: "l3",
    name: "Alexander Poysky",
    designation: "Publishing | CSPA",
    team: "leadership",
    image: AlexP,
    bio: "Publishing & Marketing Advisor"
  },
  {
    id: "l4",
    name: "Yaser AlMadani",
    designation: "Art Director",
    team: "leadership",
    image: YM,
    bio: "Formerly with Manga Arabia and an official Saudi representative for Expo Osaka 2025. Highly regarded artist, judge in national art competitions, and recognized figure in the Saudi art community."
  },
  {
    id: "l5",
    name: "Tamer Khalil",
    designation: "Audio Director",
    team: "leadership",
    image: TK,
    bio: "Composing epic soundtracks and immersive soundscapes"
  },

  {
    id: "l5",
    name: "Mohammed Alhabib",
    designation: "Technical Director",
    team: "leadership",
    image: Prof,
    bio: "An Unreal Authorized instructor for Unreal Engine 5. Trainer in various educational initiatives, developed three personal games on Steam and three more in collaboration."
  },

  // Dev Team
  {
    id: "d1",
    name: "Mohammed Alhabib",
    designation: "Technical Director",
    team: "dev",
    image: Prof,
    bio: "An Unreal Authorized instructor for Unreal Engine 5. Trainer in various educational initiatives, developed three personal games on Steam and three more in collaboration."
  },
  {
    id: "d2",
    name: "Marwan Alghamdi",
    designation: "Lead Programmer",
    team: "dev",
    image: MG,
    bio: "Passionate game developer, winner of several game development bootcamps. Currently working in AI technologies at Wakeb."
  },
  {
    id: "d4",
    name: "Mohammed Siran",
    designation: "Senior Programmer",
    team: "dev",
    image: MS,
    bio: "Computer Science graduate and game developer trained at Shafra Studio. Independently created a complete horror game."
  },
  
  {
    id: "d5",
    name: "Ibrahim Al Bannawi",
    designation: "Programmer",
    team: "dev",
    image: IB,
    bio: "Computer Science graduate and game developer trained at Code Studio, with hands-on experience in multiple projects."
  },
   {
    id: "d6",
    name: "Abdullah AlHabib",
    designation: "Programmer",
    team: "dev",
    image: AAH,
    bio: ""
  },

  // Art Team
  {
    id: "a1",
    name: "Yaser AlMadani",
    designation: "Art Director",
    team: "art",
    image: YM,
    bio: "Formerly with Manga Arabia and an official Saudi representative for Expo Osaka 2025. Highly regarded artist, judge in national art competitions, and recognized figure in the Saudi art community."
  },
  {
    id: "a2",
    name: "Mohamad Molham Al-Etr",
    designation: "3D Generalist Artist",
    team: "art",
    image: ME,
    bio: "Mobile game developer, VR specialist, and graduate in 3D art. Previously worked in a dedicated game development studio."
  },
  {
    id: "a3",
    name: "Abdullah Mahmod",
    designation: "Environment Specialist",
    team: "art",
    image: AM,
    bio: "3D environment artist with 3+ years of experience. Worked as a 3D generalist with Blue Sirius Studio and as a 3D modeller at Nfinite company. Currently contributes to Swordplay Studios projects."
  },
 {
    id: "a5",
    name: "Waad Altegege",
    designation: "2D Illustrator",
    team: "art",
    image: WT,
    bio: "Award-winning illustrator with participation in multiple government-supported projects. Recognized as one of the top visual artists in her field."
  },
  {
    id: "a6",
    name: "Mohammed Abdulhameed",
    designation: "3D Character Artist",
    team: "art",
   image: MAH,
    bio: "Award-winning illustrator with participation in multiple government-supported projects. Recognized as one of the top visual artists in her field."
  },
  // Sound Team
  {
    id: "s1",
    name: "Tamer Khalil",
    designation: "Audio Director",
    team: "sound",
    image: TK,
    bio: "Composing epic soundtracks and immersive soundscapes"
  },
  {
    id: "s2",
    name: "AbdulHadi Zubailah",
    designation: "Writer",
    team: "sound",
    image: AHZ,
    bio: "Crafting every sound effect with precision"
  },

// Production Team
{
    id: "p1",
    name: "Mohammed Abdul Badie Khan",
    designation: "Executive Producer",
    team: "production",
    image: BK,
    bio: "Experienced producer driving project success"
  },
  {
    id: "p2",
    name: "Adrian Poysky",
    designation: "Publishing producer",
    team: "production",
    image: AdrianP,
    bio: "Ensuring quality and polish in every release"
  },
  {
    id: "p3",
    name: "Majed AlGhamdi",
    designation: "Associate Producer",
    team: "production",
    image: MajedG,
    bio: "Helping to shape the future of gaming"
  },
{
    id: "p4",
    name: "Nawaf Al-Qathami",
    designation: "Quality Assurance Lead",
    team: "production",
    image: NA,
    bio: "Master’s degree in Quality Management. Head of Executive Quality in Riyadh, expertise in applying quality standards to video game development."
  },

  
  // Animation Team
  {
    id: "a1",
    name: "Sara Al-Anazi",
    designation: "3D Animation Lead",
    team: "animation",
    image: SA, 
    bio: "Experienced 3D animator with contributions to several local projects. Leads our animation efforts with a focus on bringing characters and worlds to life."
  },

  {
    id: "a2",
    name: "Leen Khalil",
    designation: "Animator/Rigger",
    team: "animation",
    image: LK,
    bio: "Experienced 3D animator with contributions to several local projects. Leads our animation efforts with a focus on bringing characters and worlds to life."
  },

  // Marketing Team
  {
    id: "m1",
    name: "Nora Alrashid",
    designation: "Marketing Specialist",
    team: "marketing",
    image: NoraA, 
    bio: "Experienced marketing specialist with a passion for building and nurturing online communities."
  },
];


