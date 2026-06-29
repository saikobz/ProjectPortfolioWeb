export type Locale = "th" | "en";

export const siteConfig = {
  name: "Your Name",
  cvPath: "/cv.pdf",
  links: {
    email: "your.email@example.com",
    github: "https://github.com/saikobz",
    linkedin: "https://linkedin.com/in/your-profile",
  },
} as const;

export type ProjectSlug = "documind" | "harmoniq";

export type Project = {
  slug: ProjectSlug;
  flagship: boolean;
  github: string;
  stack: string[];
  thumbnail: string;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  description: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  caseStudy?: Record<Locale, { problem: string; solution: string; role: string; learnings: string[] }>;
};

export const projects: Project[] = [
  {
    slug: "harmoniq",
    flagship: true,
    github: "https://github.com/saikobz/project-music",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PyTorch"],
    thumbnail: "/projects/harmoniq.svg",
    title: { th: "HarmoniQ", en: "HarmoniQ" },
    subtitle: {
      th: "AI แยก stem และ mastering เพลง",
      en: "AI music stem separation & mastering",
    },
    description: {
      th: "เว็บแอปประมวลผลเสียงด้วย AI แยก stem (เช่น vocal, drums) และ mastering เพลงผ่าน FastAPI + PyTorch",
      en: "Web app for AI audio processing — stem separation (vocals, drums, etc.) and mastering via FastAPI + PyTorch.",
    },
    highlights: {
      th: [
        "Backend ML ด้วย Python, FastAPI และ PyTorch",
        "Frontend อัปโหลดไฟล์และแสดงผลลัพธ์",
        "เชื่อมต่อ ML inference pipeline กับ REST API",
      ],
      en: [
        "ML backend with Python, FastAPI, and PyTorch",
        "Frontend file upload and result playback UI",
        "REST API integration with ML inference pipeline",
      ],
    },
    caseStudy: {
      th: {
        problem: "การแยก stem และ mastering มืออาชีพใช้เครื่องมือแพงและซับซ้อน",
        solution: "ทำให้เข้าถึงได้ผ่านเว็บ — อัปโหลดไฟล์แล้วได้ stem แยก",
        role: "Full Stack — UI, API integration และ ML pipeline setup",
        learnings: ["จัดการ async job สำหรับ audio processing", "เชื่อม Next.js กับ Python ML service"],
      },
      en: {
        problem: "Pro stem separation and mastering tools are expensive and complex.",
        solution: "Web-based upload → separated stems for easier access.",
        role: "Full Stack — UI, API integration, and ML pipeline setup.",
        learnings: ["Async jobs for audio processing", "Connecting Next.js to a Python ML service"],
      },
    },
  },
  {
    slug: "documind",
    flagship: false,
    github: "https://github.com/saikobz/AiProject",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "PostgreSQL"],
    thumbnail: "/projects/documind.svg",
    title: { th: "DocuMind", en: "DocuMind" },
    subtitle: {
      th: "ศูนย์ความรู้ทีม — ค้นหาเอกสารและสรุปด้วย AI",
      en: "Team knowledge hub with document search & AI summaries",
    },
    description: {
      th: "แพลตฟอร์มจัดการความรู้ภายในทีม อัปโหลดเอกสาร ค้นหาแบบ full-text และสรุปเนื้อหาด้วย AI เพื่อให้ทีมเข้าถึงข้อมูลได้เร็วขึ้น",
      en: "Internal team knowledge platform for uploading documents, full-text search, and AI-powered summaries so teams find information faster.",
    },
    highlights: {
      th: [
        "ออกแบบ REST API ด้วย Node.js เชื่อม Supabase/PostgreSQL",
        "ระบบค้นหาเอกสารและสรุปด้วย AI",
        "Frontend ด้วย Next.js App Router + TypeScript",
      ],
      en: [
        "Designed Node.js REST API backed by Supabase/PostgreSQL",
        "Document search and AI summary pipeline",
        "Next.js App Router frontend with TypeScript",
      ],
    },
    caseStudy: {
      th: {
        problem: "ทีมมีเอกสารกระจายหลายที่ หาไม่เจอและใช้เวลาอ่านยาว",
        solution: "รวมเอกสารในที่เดียว ค้นหาได้ทันที และให้ AI สรุปประเด็นสำคัญ",
        role: "Full Stack — ออกแบบ DB schema, API, และ UI ทั้งหมด",
        learnings: [
          "ออกแบบ schema สำหรับ full-text search บน PostgreSQL",
          "แยก concern ระหว่าง upload, indexing และ AI summary",
        ],
      },
      en: {
        problem: "Team docs were scattered — hard to find and slow to read through.",
        solution: "Central hub with instant search and AI summaries of key points.",
        role: "Full Stack — DB schema, API, and UI end-to-end.",
        learnings: [
          "PostgreSQL schema design for document search",
          "Separating upload, indexing, and AI summary concerns",
        ],
      },
    },
  },
];

export const content = {
  th: {
    nav: { about: "เกี่ยวกับ", projects: "โปรเจกต์", skills: "ทักษะ", experience: "ประสบการณ์", contact: "ติดต่อ" },
    hero: {
      role: "Junior Full Stack Developer",
      tagline: "สร้าง web app ที่ใช้ AI — ตั้งแต่ UI ถึง API และฐานข้อมูล",
      ctaCv: "ดาวน์โหลด CV",
      ctaGithub: "GitHub",
      ctaLinkedin: "LinkedIn",
    },
    about: {
      title: "เกี่ยวกับ",
      body: "นักพัฒนา Full Stack ระดับ junior ที่ถนัด React, Next.js และ Node.js พร้อมประสบการณ์ Python และ AI จากโปรเจกต์จริง กำลังมองหาตำแหน่ง Full Stack เพื่อเรียนรู้และสร้าง product ที่มี impact",
    },
    projects: {
      title: "โปรเจกต์",
      viewCaseStudy: "ดู case study",
      viewGithub: "GitHub",
      flagship: "โปรเจกต์หลัก",
    },
    skills: {
      title: "ทักษะ",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        ai: "AI / ML",
        tools: "Tools",
      },
      items: {
        frontend: ["React", "Vue", "Next.js", "TypeScript", "Tailwind CSS", "HTML"],
        backend: ["Node.js", "REST API", "Python", "FastAPI"],
        database: ["MySQL", "PostgreSQL", "Supabase"],
        ai: ["PyTorch", "AI summaries"],
        tools: ["Git", "Vercel"],
      },
    },
    experience: {
      title: "ประสบการณ์ & การศึกษา",
      items: [
        {
          period: "2022 – ปัจจุบัน",
          title: "มหาวิทยาลัย / สาขา (แก้ไข)",
          description: "กำลังศึกษา / จบการศึกษา — ใส่รายละเอียดจริงของคุณ",
        },
      ],
    },
    contact: {
      title: "ติดต่อ",
      subtitle: "เปิดรับโอกาสงาน Full Stack Junior",
      email: "อีเมล",
      downloadCv: "ดาวน์โหลด CV",
    },
    caseStudy: {
      back: "← กลับ",
      problem: "ปัญหา",
      solution: "แนวทาง",
      role: "บทบาท",
      stack: "Tech stack",
      learnings: "สิ่งที่เรียนรู้",
      github: "ดูโค้ดบน GitHub",
    },
    footer: "สร้างด้วย Next.js · Portfolio",
  },
  en: {
    nav: { about: "About", projects: "Projects", skills: "Skills", experience: "Experience", contact: "Contact" },
    hero: {
      role: "Junior Full Stack Developer",
      tagline: "Building AI-powered web apps — from UI to API and database",
      ctaCv: "Download CV",
      ctaGithub: "GitHub",
      ctaLinkedin: "LinkedIn",
    },
    about: {
      title: "About",
      body: "Junior Full Stack developer skilled in React, Next.js, and Node.js, with hands-on Python and AI experience from real projects. Looking for a Full Stack role to learn and ship impactful products.",
    },
    projects: {
      title: "Projects",
      viewCaseStudy: "View case study",
      viewGithub: "GitHub",
      flagship: "Featured",
    },
    skills: {
      title: "Skills",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        ai: "AI / ML",
        tools: "Tools",
      },
      items: {
        frontend: ["React", "Vue", "Next.js", "TypeScript", "Tailwind CSS", "HTML"],
        backend: ["Node.js", "REST API", "Python", "FastAPI"],
        database: ["MySQL", "PostgreSQL", "Supabase"],
        ai: ["PyTorch", "AI summaries"],
        tools: ["Git", "Vercel"],
      },
    },
    experience: {
      title: "Experience & Education",
      items: [
        {
          period: "2022 – Present",
          title: "University / Major (edit me)",
          description: "Studying / graduated — replace with your details.",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Open to Junior Full Stack opportunities",
      email: "Email",
      downloadCv: "Download CV",
    },
    caseStudy: {
      back: "← Back",
      problem: "Problem",
      solution: "Solution",
      role: "My role",
      stack: "Tech stack",
      learnings: "Learnings",
      github: "View code on GitHub",
    },
    footer: "Built with Next.js · Portfolio",
  },
} as const;

export type Content = (typeof content)[Locale];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
