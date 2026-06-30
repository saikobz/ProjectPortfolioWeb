export type Locale = "th" | "en";

export const siteConfig = {
  name: {
    th: "ภาดล เกตุจันทร์",
    en: "Padon Kedchan",
  },
  resumePath: "/resume.pdf",
  profileImage: "/profile.jpg",
  links: {
    email: "kedchanpadon@gmail.com",
    github: "https://github.com/saikobz",
    linkedin: "https://www.linkedin.com/in/padon-kedchan-913685337/",
  },
} as const;

export type ProjectSlug = "documind" | "harmoniq";

export type Project = {
  slug: ProjectSlug;
  flagship: boolean;
  github: string;
  stack: string[];
  thumbnail: string;
  imageWidth?: number;
  imageHeight?: number;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  description: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  screenshots: { src: string; alt: Record<Locale, string> }[];
  caseStudy?: Record<Locale, { problem: string; solution: string; role: string; learnings: string[] }>;
};

export const projects: Project[] = [
  {
    slug: "harmoniq",
    flagship: true,
    github: "https://github.com/saikobz/project-music",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PyTorch"],
    thumbnail: "/projects/harmoniq.png",
    imageWidth: 484,
    imageHeight: 872,
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
    screenshots: [
      { src: "/projects/harmoniq.png", alt: { th: "HarmoniQ — มุมมองแยก stem พร้อม waveform", en: "HarmoniQ — stem separation view with waveforms" } },
    ],
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
    screenshots: [
      { src: "/projects/documind.svg", alt: { th: "DocuMind — รายการเอกสารและสรุปด้วย AI", en: "DocuMind — document list with AI summary panel" } },
    ],
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
    nav: { about: "เกี่ยวกับ", projects: "โปรเจกต์", skills: "ทักษะ", experience: "ประสบการณ์", contact: "ติดต่อ", skip: "ข้ามไปยังเนื้อหา" },
    hero: {
      role: "Junior Full Stack Developer",
      tagline: "สร้าง web app ที่ใช้ AI — ตั้งแต่ UI ถึง API และฐานข้อมูล",
      available: "เปิดรับงาน Full Stack Junior",
      ctaResume: "ดาวน์โหลด Resume",
      ctaGithub: "GitHub",
      ctaLinkedin: "LinkedIn",
    },
    about: {
      title: "เกี่ยวกับ",
      body: "บัณฑิตสาขาเทคโนโลยีสารสนเทศที่มีประสบการณ์ในการพัฒนา Full-stack และ AI มีความเชี่ยวชาญในการสร้างเว็บแอปพลิเคชันด้วย React และ Node.js รวมถึงพัฒนา AI แยกและปรับแต่งเสียงดนตรีโดยใช้เทคโนโลยี Deep Learning มีความมุ่งมั่นที่จะร่วมเป็นส่วนหนึ่งของทีมที่มีการทำงานร่วมกัน และพร้อมพัฒนาทักษะด้าน Full-stack Engineering ให้ก้าวหน้ายิ่งขึ้น ",
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
        frontend: ["React", "Vue", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML"],
        backend: ["Node.js", "REST API", "Python", "FastAPI"],
        database: ["MySQL", "PostgreSQL", "MongoDB"],
        ai: ["PyTorch", "CNN Model", "LSTM Model", "Open-Unmix"],
        tools: ["Git", "Github", "Vercel", "Docker", "Postman", "VSCode", "Cursor"],
      },
    },
    experience: {
      title: "ประสบการณ์ & การศึกษา",
      items: [
        {
          period: "2022 – 2026",
          title: "มหาวิทยาลัยศิลปากร / สาขา (เทคโนโลยีสารสนเทศ)",
          description: "จบการศึกษา",
        },
      ],
    },
    contact: {
      title: "ติดต่อ",
      headline: "มาสร้างอะไรด้วยกัน",
      subtitle: "เปิดรับโอกาสงาน Full Stack Junior",
      email: "อีเมล",
      downloadResume: "ดาวน์โหลด Resume",
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
    footer: "สร้างโดย ภาดล เกตุจันทร์",
  },
  en: {
    nav: { about: "About", projects: "Projects", skills: "Skills", experience: "Experience", contact: "Contact", skip: "Skip to content" },
    hero: {
      role: "Junior Full Stack Developer",
      tagline: "Building AI-powered web apps — from UI to API and database",
      available: "Open to Junior Full Stack roles",
      ctaResume: "Download Resume",
      ctaGithub: "GitHub",
      ctaLinkedin: "LinkedIn",
    },
    about: {
      title: "About",
      body: "Information Technology graduate with hands-on experience in full-stack development and AI. Proficient in building web applications with React and Node.js, and developing AI-driven music transcription systems using Python and deep learning. Passionate about contributing to a collaborative team and advancing my expertise in full-stack engineering.",
    },
    projects: {
      title: "Projects",
      viewCaseStudy: "View case study",
      viewGithub: "GitHub",
      flagship: "Main",
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
        frontend: ["React", "Vue", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML"],
        backend: ["Node.js", "REST API", "Python", "FastAPI"],
        database: ["MySQL", "PostgreSQL", "MongoDB"],
        ai: ["PyTorch", "CNN Model", "LSTM Model", "Open-Unmix"],
        tools: ["Git", "Github", "Vercel", "Docker", "Postman", "VSCode", "Cursor"],
      },
    },
    experience: {
      title: "Experience & Education",
      items: [
        {
          period: "2022 – 2026",
          title: "Silpakorn University / Major (Information Technology)",
          description: "Graduated",
        },
      ],
    },
    contact: {
      title: "Contact",
      headline: "Let's build something together",
      subtitle: "Open to Junior Full Stack opportunities",
      email: "Email",
      downloadResume: "Download Resume",
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
    footer: "Created by Padon Kedchan",
  },
} as const;

export type Content = (typeof content)[Locale];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
