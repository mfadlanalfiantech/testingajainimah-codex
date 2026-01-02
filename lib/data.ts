export type Work = {
  slug: string;
  title: string;
  description: string;
  role: string;
  timeframe: string;
  tags: string[];
  metrics: string[];
  preview: string;
  problem: string;
  constraints: string[];
  approach: string[];
  results: string[];
};

export const featuredWorks: Work[] = [
  {
    slug: "atlas-commerce",
    title: "Atlas Commerce",
    description: "Rebuild checkout flow untuk meningkatkan konversi mobile.",
    role: "Lead Product Designer",
    timeframe: "Q2 2024",
    tags: ["Mobile", "E-commerce", "Checkout"],
    metrics: ["+18% CVR", "-32% drop-off"],
    preview: "Gradient grid preview dengan highlight produk utama.",
    problem:
      "Pengguna kesulitan menyelesaikan checkout karena flow terlalu panjang dan tidak terasa aman.",
    constraints: [
      "Integrasi payment gateway legacy",
      "Tidak boleh mengubah API keranjang",
      "Target waktu rilis 6 minggu"
    ],
    approach: [
      "Audit funnel & heatmap untuk menemukan titik drop-off",
      "Buat prototipe low-fi dan tes cepat 5 pengguna",
      "Mapping trust cues dan microcopy untuk meningkatkan rasa aman"
    ],
    results: [
      "Penyederhanaan langkah dari 5 ke 3 layar",
      "Waktu checkout turun 28%",
      "NPS naik dari 42 ke 56"
    ]
  },
  {
    slug: "nova-finance",
    title: "Nova Finance",
    description: "Dashboard finansial modular dengan insight real-time.",
    role: "UX Architect",
    timeframe: "Q4 2023",
    tags: ["SaaS", "Analytics", "B2B"],
    metrics: ["+25% retention", "3x faster insights"],
    preview: "Kartu modular dan chart kontras tinggi untuk fokus data.",
    problem:
      "Tim finance butuh insight cepat dari data yang tersebar, namun dashboard lama lambat dan membingungkan.",
    constraints: [
      "Kepatuhan keamanan SOC2",
      "Support multi-tenant",
      "Data refresh setiap 5 menit"
    ],
    approach: [
      "Design system token untuk modul data",
      "Info hierarchy berbasis job-to-be-done",
      "Prototipe interaktif dengan 3 persona utama"
    ],
    results: [
      "Adopsi dashboard naik 40%",
      "Task completion 2x lebih cepat",
      "Request support turun 18%"
    ]
  },
  {
    slug: "arcade-learning",
    title: "Arcade Learning",
    description: "Gamified onboarding untuk platform pembelajaran.",
    role: "Product Designer",
    timeframe: "Q1 2024",
    tags: ["EdTech", "Onboarding", "Gamification"],
    metrics: ["+22% activation", "+14% weekly active"],
    preview: "Visual editorial dengan ilustrasi orbit dan progress ring.",
    problem:
      "Pengguna baru tidak memahami value platform dalam 3 menit pertama.",
    constraints: [
      "Konten video sudah fixed",
      "Harus mendukung perangkat low-end",
      "KPI activation dalam 30 hari"
    ],
    approach: [
      "Journey mapping untuk first session",
      "Micro-interaction untuk reward",
      "A/B test 2 varian onboarding"
    ],
    results: [
      "Completion onboarding naik 31%",
      "Drop-off sesi pertama turun 20%",
      "Referral prompt 2x lebih sering digunakan"
    ]
  }
];

export const worksGallery = [
  "Rebrand layout editorial untuk majalah digital.",
  "Design system tokens untuk suite produktivitas.",
  "Prototype VR onboarding dengan gesture guide.",
  "Flow booking ulang untuk layanan kesehatan.",
  "Dashboard real-time untuk logistik urban.",
  "Microcopy playbook untuk voice assistant.",
  "UI kit wearable devices dengan glanceable metrics.",
  "Konsep dark mode untuk aplikasi travel."
];

export const processSteps = [
  {
    title: "Discover",
    description: "Audit data, user interview, dan mapping kebutuhan utama."
  },
  {
    title: "Define",
    description: "Merumuskan problem statement, KPI, dan focus area."
  },
  {
    title: "Design",
    description: "Membangun konsep visual, prototipe, dan validasi cepat."
  },
  {
    title: "Deliver",
    description: "Handoff sistem desain, dokumentasi, dan monitoring."
  }
];

export const systemDesignCases = [
  {
    title: "Personalization Engine",
    summary: "Mesin rekomendasi konten untuk aplikasi lifestyle.",
    diagram: `graph TD\n  A[Event Stream] --> B(Feature Store)\n  B --> C{Ranking Model}\n  C --> D[Recommendation API]\n  D --> E[Client Apps]`,
    tradeoffs: [
      {
        decision: "Batch + near real-time",
        upside: "Biaya lebih stabil",
        downside: "Latency rekomendasi 5-10 menit"
      },
      {
        decision: "Hybrid model (rules + ML)",
        upside: "Kontrol editorial lebih kuat",
        downside: "Kompleksitas maintenance meningkat"
      }
    ]
  },
  {
    title: "Design Ops Portal",
    summary: "Portal asset design untuk 8 produk internal.",
    diagram: `flowchart LR\n  A[Design Repo] --> B{Asset Pipeline}\n  B --> C[Preview Renderer]\n  B --> D[Versioned CDN]\n  C --> E[Portal UI]\n  D --> E`,
    tradeoffs: [
      {
        decision: "CDN versioned",
        upside: "Rollback instan",
        downside: "Storage cost lebih tinggi"
      },
      {
        decision: "Renderer stateless",
        upside: "Scale mudah",
        downside: "Kurang fleksibel untuk custom preview"
      }
    ]
  }
];

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "System Design", href: "/system-design" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];
