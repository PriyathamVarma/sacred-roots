// shared/constants/data.ts
export interface Community {
  id: string;
  name: string;
  region: string;
  members: number;
  color: string;
  description: string;
}

export interface CommunityInitiative {
  id: string;
  communityId: string;
  title: string;
  description: string;
  date: string;
  participants: number;
  image?: string;
  tags?: string[];
}

export const communities: Community[] = [
  {
    id: "lakota",
    name: "Lakota Wisdom Keepers",
    region: "Great Plains, North America",
    members: 1240,
    color: "bg-gradient-to-r from-amber-100 to-red-100",
    description:
      "Preserving the sacred traditions of the Oceti Sakowin (Seven Council Fires)",
  },
  {
    id: "quechua",
    name: "Quechua Elders Council",
    region: "Andes Mountains, South America",
    members: 980,
    color: "bg-gradient-to-r from-emerald-100 to-blue-100",
    description: "Guardians of Inca wisdom and Andean cosmovision",
  },
  {
    id: "sami",
    name: "Sámi Spiritual Network",
    region: "Sápmi, Northern Europe",
    members: 760,
    color: "bg-gradient-to-r from-blue-100 to-purple-100",
    description: "Keeping alive the joik traditions and arctic spirituality",
  },
  {
    id: "maori",
    name: "Māori Tohunga Collective",
    region: "Aotearoa (New Zealand)",
    members: 1530,
    color: "bg-gradient-to-r from-green-100 to-teal-100",
    description: "Protectors of Mātauranga Māori (traditional knowledge)",
  },
  {
    id: "yoruba",
    name: "Yoruba Ifá Practitioners",
    region: "West Africa",
    members: 2100,
    color: "bg-gradient-to-r from-orange-100 to-yellow-100",
    description: "Sustainers of Ifá divination and Orisha traditions",
  },
  {
    id: "siberian",
    name: "Siberian Shamans Alliance",
    region: "Russian Far East",
    members: 420,
    color: "bg-gradient-to-r from-purple-100 to-indigo-100",
    description: "Practitioners of ancient Tungusic and Turkic shamanism",
  },
];

export const communityInitiatives: CommunityInitiative[] = [
  {
    id: "buffalo-return",
    communityId: "lakota",
    title: "The Return of the Buffalo",
    description:
      "Reviving the spiritual practice of buffalo ceremonies to heal both land and people. This initiative combines traditional knowledge with ecological restoration efforts across the Great Plains.",
    date: "2025-03-15",
    participants: 87,
    tags: ["ecology", "ceremony"],
  },
  {
    id: "quipu-digital",
    communityId: "quechua",
    title: "Quipu in the Digital Age",
    description:
      "Elders and technologists collaborating to preserve the ancient quipu recording system through interactive digital platforms, ensuring this knowledge survives for future generations.",
    date: "2025-02-28",
    participants: 42,
    tags: ["technology", "education"],
  },
  {
    id: "arctic-drumming",
    communityId: "sami",
    title: "Arctic Drumming Circles",
    description:
      "Monthly gatherings where Sámi joikers teach traditional drumming patterns that tell stories of the northern lights, reindeer migrations, and ancestral journeys.",
    date: "2025-04-05",
    participants: 63,
    tags: ["music", "storytelling"],
  },
  {
    id: "maramataka-app",
    communityId: "maori",
    title: "Maramataka Lunar Calendar App",
    description:
      "Developing a mobile application that brings the traditional Māori lunar calendar to modern users, with notifications for planting, fishing, and ceremonial times based on moon phases.",
    date: "2025-01-20",
    participants: 112,
    tags: ["technology", "agriculture"],
  },
  {
    id: "oracle-training",
    communityId: "yoruba",
    title: "Young Ifá Oracle Training",
    description:
      "A 12-month intensive program where elders train selected youth in the sacred art of Ifá divination, ensuring the continuity of this precise spiritual science.",
    date: "2025-03-01",
    participants: 24,
    tags: ["education", "spirituality"],
  },
  {
    id: "permafrost-rituals",
    communityId: "siberian",
    title: "Permafrost Protection Rituals",
    description:
      "Reviving ancient ceremonies believed to strengthen the permafrost, combining spiritual practice with climate change monitoring in vulnerable Arctic regions.",
    date: "2025-02-10",
    participants: 38,
    tags: ["ecology", "climate"],
  },
  {
    id: "language-nest",
    communityId: "maori",
    title: "Te Kōhanga Reo (Language Nest)",
    description:
      "Immersion preschools where children learn exclusively in te reo Māori, surrounded by traditional protocols, stories, and songs under the guidance of elders.",
    date: "2025-04-18",
    participants: 210,
    tags: ["education", "language"],
  },
  {
    id: "star-knowledge",
    communityId: "lakota",
    title: "Star Knowledge Gathering",
    description:
      "Annual convergence where keepers of Lakota astronomy share celestial knowledge used for navigation, timekeeping, and spiritual ceremonies.",
    date: "2025-05-22",
    participants: 145,
    tags: ["science", "ceremony"],
  },
];
