export type Locale = "en" | "zh"

type LanguageLink = {
  label: string
  href: string
  locale: Locale
  ariaLabel: string
}

type CapabilityContent = {
  title: string
  description: string
}

type ProjectContent = {
  title: string
  subtitle: string
  description: string
  problem: string
  process: string
  outcome: string
  details?: {
    title: string
    items: string[]
  }[]
  image: string
  alt: string
  tags: string[]
  evidence: string[]
  links: {
    label: string
    href: string
  }[]
}

type ExperienceContent = {
  tabLabel: string
  role: string
  organization: string
  location: string
  dates: string
  summary: string
  highlights: string[]
  skills: string[]
}

type EducationContent = {
  degree: string
  institution: string
  location: string
  dates: string
  summary: string
  focus: string[]
}

type ContactSlideContent = {
  src: string
  alt: string
  caption: string
}

type ContactLinkContent = {
  label: string
  href: string
  kind: "email" | "external" | "download"
}

export type FocusedPortfolioContent = {
  locale: Locale
  htmlLang: string
  metadata: {
    title: string
    description: string
  }
  name: string
  languageSwitchLabel: string
  languageLinks: LanguageLink[]
  navigation: {
    label: string
    href: string
  }[]
  hero: {
    eyebrow: string
    headline: string
    summary: string
    availability: string
    primaryCta: string
    secondaryCta: string
    skills: string[]
    photoAlt: string
    cardKicker: string
    cardSummary: string
  }
  sections: {
    aboutEyebrow: string
    aboutTitle: string
    aboutSummary: string
    projectsEyebrow: string
    projectsTitle: string
    experienceEyebrow: string
    experienceTitle: string
    educationEyebrow: string
    educationTitle: string
    awardsTitle: string
    contactEyebrow: string
    contactTitle: string
    contactSummary: string
    contactLocation: string
    contactAvailability: string
  }
  labels: {
    problem: string
    process: string
    outcome: string
    experienceRoles: string
    experienceSkills: string
    slideshowProgress: string
    showSlide: string
  }
  capabilities: CapabilityContent[]
  projects: ProjectContent[]
  experience: ExperienceContent[]
  education: EducationContent[]
  awards: string[]
  contactLinks: ContactLinkContent[]
  contactSlides: ContactSlideContent[]
}

const languageLinks: LanguageLink[] = [
  {
    label: "EN",
    href: "/",
    locale: "en",
    ariaLabel: "View English version",
  },
  {
    label: "中文",
    href: "/zh",
    locale: "zh",
    ariaLabel: "查看中文版本",
  },
]

const contactSlideImages = [
  "/portfolio/images/contact-slides/contact-slide-01.jpg",
  "/portfolio/images/contact-slides/contact-slide-02.jpg",
  "/portfolio/images/contact-slides/contact-slide-03.jpg",
  "/portfolio/images/contact-slides/contact-slide-04.jpg",
  "/portfolio/images/contact-slides/contact-slide-05.jpg",
  "/portfolio/images/contact-slides/contact-slide-06.jpg",
  "/portfolio/images/contact-slides/contact-slide-07.jpg",
  "/portfolio/images/contact-slides/contact-slide-08.jpg",
  "/portfolio/images/contact-slides/contact-slide-09.jpg",
  "/portfolio/images/contact-slides/contact-slide-10.jpg",
  "/portfolio/images/contact-slides/contact-slide-11.jpg",
  "/portfolio/images/contact-slides/contact-slide-12.jpg",
  "/portfolio/images/contact-slides/contact-slide-13.jpg",
  "/portfolio/images/contact-slides/contact-slide-14.jpg",
  "/portfolio/images/contact-slides/contact-slide-15.jpg",
  "/portfolio/images/contact-slides/contact-slide-16.jpg",
  "/portfolio/images/contact-slides/contact-slide-17.jpg",
  "/portfolio/images/contact-slides/contact-slide-18.jpg",
  "/portfolio/images/contact-slides/contact-slide-19.jpg",
]

export const focusedPortfolioContent: Record<Locale, FocusedPortfolioContent> = {
  en: {
    locale: "en",
    htmlLang: "en",
    metadata: {
      title: "Meiyu Song | UX/UI Designer · Human-Centred AI",
      description:
        "Understanding people. Creating value. Meiyu Song's UX/UI portfolio connects human-centred research, product thinking and AI-assisted design through real projects.",
    },
    name: "Meiyu Song",
    languageSwitchLabel: "Language",
    languageLinks,
    navigation: [
      { label: "Work", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Product & UX Designer based in Dublin",
      headline:
        "Understanding people and turning complex problems into clear, useful product experiences.",
      summary:
        "I combine user research, product thinking, commercial awareness and interaction design to make digital services easier to understand and more valuable to use.",
      availability:
        "Currently open to UX Designer, Product Designer, and UX Research opportunities in Ireland.",
      primaryCta: "View Work",
      secondaryCta: "Contact",
      skills: [
        "UX / Product Design",
        "HCI Research",
        "B2B Website Redesign",
        "Human-Centred AI",
        "Sustainability UX",
        "Cross-cultural Communication",
      ],
      photoAlt: "Meiyu Song professional portrait",
      cardKicker: "Dublin UX / Product / HCI portfolio",
      cardSummary: "",
    },
    sections: {
      aboutEyebrow: "What I Do",
      aboutTitle: "Three Ways I Create Value",
      aboutSummary:
        "From performance art to HCI, I bring emotional sensitivity, research thinking, and storytelling into UX design. I am especially interested in digital experiences that make complex systems clearer, more trustworthy, and more human for people making important decisions.",
      projectsEyebrow: "Featured Work",
      projectsTitle: "Three Core Case Studies",
      experienceEyebrow: "Experience",
      experienceTitle:
        "Applied communication, research, and service experience",
      educationEyebrow: "Education & Awards",
      educationTitle:
        "HCI training with a performance and communication foundation",
      awardsTitle: "Awards & Certifications",
      contactEyebrow: "Contact",
      contactTitle: "Open to UX, Product and Research roles",
      contactSummary:
        "I am currently based in Dublin, Ireland, and open to internship, graduate and junior opportunities in UX Design, Product Design and UX Research.",
      contactLocation: "Dublin, Ireland",
      contactAvailability: "Open to internship, graduate and junior roles",
    },
    labels: {
      problem: "Problem",
      process: "Process",
      outcome: "Outcome",
      experienceRoles: "Experience roles",
      experienceSkills: "Experience skills",
      slideshowProgress: "Slideshow progress",
      showSlide: "Show",
    },
    contactLinks: [
      {
        label: "Email",
        href: "mailto:songmeiyu033@gmail.com",
        kind: "email",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/meiyu-song-26a6b4383/",
        kind: "external",
      },
      {
        label: "Download CV",
        href: "/portfolio/docs/meiyu-song-cv.pdf",
        kind: "download",
      },
      {
        label: "Douyin",
        href: "https://www.douyin.com/user/MS4wLjABAAAAo9dpeGt_jYrmbUo6kNDz0FVXO8Abq1AGzcIhhhvBZ-8",
        kind: "external",
      },
      {
        label: "Xiaohongshu",
        href: "https://www.xiaohongshu.com/user/profile/5ba9dec073da1f0001e40e4f?xsec_token=YBiBpbI37uBsF493O6wPzBvmWD_2DaWDiqBwKjhSF9FI8=&xsec_source=app_share&xhsshare=CopyLink&shareRedId=N0hDOUdKRzk9OklDOk4wNjY0Tjs0SjpP&apptime=1793274906&share_id=644ed85279e94e6ebe0e87071dab1ef0",
        kind: "external",
      },

    ],
    capabilities: [
      {
        title: "UX & Web Design for Business Clarity",
        description:
          "I design clear, structured and trustworthy digital experiences for real business contexts, including website audits, information architecture, content structure, responsive layouts and B2B communication.",
      },
      {
        title: "Research-Led Product Thinking",
        description:
          "I use interviews, personas, requirements, journey mapping, competitor analysis, prototyping and evaluation to turn user problems into clearer product decisions.",
      },
      {
        title: "Human-Centred AI & Ethical Storytelling",
        description:
          "I explore how emerging technologies affect emotion, trust and social connection, with HCI work around AI companions, older adults, ethical AI, accessibility and interactive storytelling.",
      },
    ],
    projects: [
      {
        title:
          "Redesigning a B2B Website for a Sustainable Bio-Energy Company",
        subtitle: "Jianglan Bio-Energy Europe Website Redesign",
        description:
          "A real-world internship project where I helped improve the structure, clarity, and trustworthiness of a B2B website for a Dublin-based sustainable bio-energy company.",
        problem:
          "Jianglan needed to make complex sustainability, used cooking oil, SAF, certification, supply-chain and partnership information feel credible, structured and easy to understand for B2B stakeholders.",
        process:
          "I audited the existing website, reviewed navigation and content hierarchy, identified trust gaps, and translated director and design-team feedback into clearer information architecture and user-facing priorities.",
        outcome:
          "The project positions the redesign around trust, clarity, and sustainability communication, showing how business language can become UX structure for a more professional B2B website experience.",
        details: [
          {
            title: "My Contribution",
            items: [
              "Website audit, information architecture and content structure.",
              "Trust-focused communication for UCO, SAF, certification and supply-chain topics.",
              "Translation of stakeholder feedback into practical website priorities.",
            ],
          },
          {
            title: "Before / After Focus",
            items: [
              "Before: sustainability value, business capability and certification information were harder to scan as a connected B2B story.",
              "After: Home, About, Services, Certification and Contact priorities became clearer paths for partners and sustainability stakeholders.",
            ],
          },
        ],
        image: "/portfolio/images/jianglan-redesign.jpg",
        alt: "Jianglan Bio-Energy Europe website redesign screens",
        tags: [
          "UX Design",
          "Website Redesign",
          "Sustainability",
          "B2B",
          "Information Architecture",
        ],
        evidence: [
          "Real company internship",
          "Dublin-based company",
          "Stakeholder communication",
          "Trust design",
          "Home / About / Services / Certification / Contact",
          "UCO / SAF / supply-chain communication",
        ],
        links: [
          { label: "View live website", href: "https://www.jl-bioenergy.com/#/home" },
          {
            label: "View screens",
            href: "/portfolio/images/jianglan-redesign.jpg",
          },
          {
            label: "Figma prototype",
            href: "https://www.figma.com/proto/UrbjSkLVfkpqcY5OzTEEsk/Untitled?node-id=72-6720&p=f&t=yhM4OdZV8cAmHbpv-1&scaling=min-zoom&content-scaling=fixed&page-id=30%3A639",
          },
        ],
      },
      {
        title:
          "Designing a Decision-Support Platform for International Students",
        subtitle: "Global Study Hub (Immigration Cheat Sheets)",
        description:
          "A 13-week UX research and product design project helping international students compare countries, universities and local areas through clearer, more trustworthy information.",
        problem:
          "International students were dealing with fragmented sources, uneven trust, limited local context and decision paralysis when comparing study-abroad options.",
        process:
          "The project moved from problem framing and interviews into personas, requirements, competitor analysis, ideation, Figma prototyping, evaluation and reflection.",
        outcome:
          "Immigration Cheat Sheets became a decision-support concept with Quiz, Plan and Explore modules for clearer comparison.",
        image: "/portfolio/images/immigration-cheat-sheets.jpg",
        alt: "Immigration Cheat Sheets UX process board",
        tags: [
          "UX Research",
          "Product Design",
          "User Interviews",
          "Figma",
          "International Students",
        ],
        evidence: [
          "Team academic project · 2025",
          "Personas + requirements",
          "Quiz / Plan / Explore prototype",
          "Evaluation + reflection",
        ],
        links: [
          { label: "UXD report", href: "/portfolio/docs/uxd-report.pdf" },
          { label: "Appendices", href: "/portfolio/docs/uxd-appendices.pdf" },
        ],
      },
      {
        title: "Human-Centred AI Companionship for Older Adults",
        subtitle: "A Day with ElliQ",
        description:
          "A human-centred AI project combining qualitative HCI research on older adults' loneliness with an interactive storytelling prototype about ElliQ, exploring how AI companions may support, complicate, or reshape emotional connection in later life.",
        problem:
          "AI companion robots are often framed as a response to later-life loneliness, but loneliness and social connection are emotionally complex. These systems raise questions about trust, dependency, privacy, authenticity, and ethical care.",
        process:
          "The research part covers research questions, semi-structured interviews, scenario walkthroughs, thematic analysis, and ethics. The design part translates that topic into a multi-scene ElliQ story using voice interaction, data visualisation, and accessibility thinking.",
        outcome:
          "The combined project shows a research-to-design direction: from HCI questions about loneliness and care to an interactive experience that makes ethical AI companionship more tangible.",
        details: [
          {
            title: "Part 1: HCI Research",
            items: [
              "AI companion robots, older adults, loneliness, social connection and scenario walkthroughs.",
              "Ethical focus on trust, dependency, privacy, authenticity and responsible care.",
            ],
          },
          {
            title: "Part 2: Interactive Storytelling Prototype",
            items: [
              "A Day with ElliQ uses React, TypeScript, voice-oriented moments, data visualisation and accessible reading patterns.",
              "The prototype turns research questions into a tangible daily-life story rather than a purely technical demo.",
            ],
          },
        ],
        image: "/portfolio/images/elliq-story.jpg",
        alt: "A Day with ElliQ interactive story landing page",
        tags: [
          "Human-Centred AI",
          "HCI Research",
          "Older Adults",
          "Ethical AI",
          "Interactive Storytelling",
          "React / TypeScript",
        ],
        evidence: [
          "Research questions",
          "Scenario walkthroughs",
          "Ethics",
          "Voice interaction",
          "Data visualisation",
          "Accessibility",
        ],
        links: [
          {
            label: "Open story",
            href: "https://folk-fig-91932575.figma.site",
          },
          {
            label: "Project PDF",
            href: "/portfolio/docs/a-day-with-elliq.pdf",
          },
        ],
      },
    ],
    experience: [
      {
        tabLabel: "Jianglan",
        role: "UX Design Intern",
        organization: "Jianglan Bio-Energy Europe Ltd.",
        location: "Dublin, Ireland",
        dates: "Jan 2026 – Jun 2026",
        summary:
          "Supporting a trust, clarity, and communication redesign for a B2B sustainability website focused on used cooking oil recycling, sustainable aviation fuel supply chains, certification, and international stakeholder communication.",
        highlights: [
          "Analysed the existing website and identified communication problems around business capability, sustainability value, certification, supply-chain context, and international user trust.",
          "Proposed clearer information architecture, homepage structure, navigation priorities, and trust-focused content for B2B users and sustainability stakeholders.",
          "Translated director feedback into practical design guidance across business goals, technical sustainability information, and user trust.",
        ],
        skills: [
          "B2B UX",
          "Information architecture",
          "Trust design",
          "Stakeholder communication",
        ],
      },
      {
        tabLabel: "AFY Education",
        role: "Education Consultant / Customer Experience & Operations",
        organization: "AFY Education Technology",
        location: "Hangzhou, China",
        dates: "Sep 2023 - Sep 2024",
        summary:
          "Provided study-abroad consultation, education planning, service matching, customer relationship management, and education event operations.",
        highlights: [
          "Generated approximately RMB 2.6 million in personal signed sales (around €350,000) during Sep 2023–Aug 2024; received the Annual Best Service Star award.",
          "Identified user needs through one-to-one consultations and matched students with suitable education services, tutors, and learning pathways.",
          "Managed customer relationships across the full service journey from initial consultation to conversion, follow-up, referral, and repeat purchase.",
          "Planned and hosted large-scale education branding events, including an overseas study fan meeting.",
        ],
        skills: [
          "Needs analysis",
          "Customer journey",
          "Client consultation",
          "Service matching",
        ],
      },
      {
        tabLabel: "Science Museum",
        role: "Science Education Instructor / Public Engagement Facilitator",
        organization: "Zhejiang Science & Technology Museum",
        location: "Hangzhou, China",
        dates: "Dec 2021 - Aug 2023",
        summary:
          "Designed and delivered interactive science education, public engagement, school outreach, and family learning programmes.",
        highlights: [
          "Planned and delivered interactive science programmes for children, families, and school groups, from activity design and materials preparation to facilitation and post-event reflection.",
          "Designed experiential learning programmes using science experiments, storytelling, performance, and hands-on activities.",
          "Wrote promotional articles and supported content publication across official websites, WeChat, Douyin, and local media channels.",
        ],
        skills: [
          "Workshop facilitation",
          "Experience design",
          "Science communication",
          "Feedback-led improvement",
        ],
      },
      {
        tabLabel: "Youth Centre",
        role: "Language & Drama Instructor",
        organization: "Hangzhou Youth Activity Centre",
        location: "Hangzhou, China",
        dates: "2022 - 2025",
        summary:
          "Designed expressive language, storytelling, drama, communication, and presentation courses for children and young learners.",
        highlights: [
          "Developed interactive classroom activities using role-play, performance, group discussion, and stage presentation.",
          "Adapted teaching methods based on student age, confidence level, learning style, and participation needs.",
          "Created a supportive learning environment for communication, confidence, public speaking, and self-expression.",
        ],
        skills: [
          "Storytelling",
          "Learning design",
          "Presentation coaching",
          "Youth facilitation",
        ],
      },
    ],
    education: [
      {
        degree: "MSc Human-Computer Interaction · 2H1",
        institution: "University College Dublin",
        location: "Dublin, Ireland",
        dates: "Aug 2025 - Aug 2026",
        summary:
          "Completed with Second Class Honours, Grade 1 (2H1). Postgraduate training in UX design, user research, interaction design, digital methods, human-centred design, AI ethics, and HCI practice.",
        focus: [
          "UX design and user research",
          "Interaction design and HCI practice",
          "Human-centred AI and AI ethics",
          "Digital methods and platform analysis",
        ],
      },
      {
        degree: "BA Drama & Film Literature / Performance",
        institution: "Xi'an International Studies University",
        location: "Xi'an, China",
        dates: "2016 - 2020",
        summary:
          "Creative communication foundation in performance, storytelling, audience understanding, body and emotion awareness, public expression, and presentation.",
        focus: [
          "Drama and film-related study",
          "Performance and stage communication",
          "Storytelling and audience engagement",
          "Creative communication",
        ],
      },
    ],
    awards: [
      "First Prize, Zhejiang Science Communicator Professional Skills Competition",
      "First Prize, Zhejiang Provincial Earthquake Prevention and Disaster Reduction Science Communication Competition",
      "Second Prize, National Science Museum Instructor Competition",
      "Teacher Qualification Certificate, Mandarin Proficiency Level 2A, and National Computer Rank Examination Level 2",
    ],
    contactSlides: [
      {
        src: contactSlideImages[0],
        alt: "Meiyu Song presenting at a cultural reading event",
        caption: "Public speaking",
      },
      {
        src: contactSlideImages[1],
        alt: "Meiyu Song attending a professional conference",
        caption: "Professional communication",
      },
      {
        src: contactSlideImages[2],
        alt: "Meiyu Song holding a project folder outside at night",
        caption: "Cross-cultural experience",
      },
      {
        src: contactSlideImages[3],
        alt: "Meiyu Song in a green screen studio",
        caption: "Media production",
      },
      {
        src: contactSlideImages[4],
        alt: "Meiyu Song hosting an event on stage",
        caption: "Event hosting",
      },
      {
        src: contactSlideImages[5],
        alt: "Meiyu Song speaking on a large stage",
        caption: "Presentation",
      },
      {
        src: contactSlideImages[6],
        alt: "Meiyu Song presenting in front of a large red screen",
        caption: "Storytelling",
      },
      {
        src: contactSlideImages[7],
        alt: "Meiyu Song presenting in front of a photo collage",
        caption: "Audience engagement",
      },
      {
        src: contactSlideImages[8],
        alt: "Meiyu Song presenting with arms open",
        caption: "Facilitation",
      },
      {
        src: contactSlideImages[9],
        alt: "Meiyu Song speaking into a microphone",
        caption: "Communication",
      },
      {
        src: contactSlideImages[10],
        alt: "Meiyu Song speaking into a microphone on stage",
        caption: "Public engagement",
      },
      {
        src: contactSlideImages[11],
        alt: "Meiyu Song speaking at a public event",
        caption: "Public speaking",
      },
      {
        src: contactSlideImages[12],
        alt: "Meiyu Song in a green screen studio",
        caption: "Studio work",
      },
      {
        src: contactSlideImages[13],
        alt: "Meiyu Song performing on stage",
        caption: "Performance",
      },
      {
        src: contactSlideImages[14],
        alt: "Meiyu Song in a green screen studio",
        caption: "Visual communication",
      },
      {
        src: contactSlideImages[15],
        alt: "Meiyu Song presenting with a headset microphone",
        caption: "Live presentation",
      },
      {
        src: contactSlideImages[16],
        alt: "Meiyu Song in traditional costume",
        caption: "Cultural storytelling",
      },
      {
        src: contactSlideImages[17],
        alt: "Meiyu Song in a staged cultural education setting",
        caption: "Interactive learning",
      },
      {
        src: contactSlideImages[18],
        alt: "Meiyu Song presenting beside a screen",
        caption: "Science communication",
      },
    ],
  },
  zh: {
    locale: "zh",
    htmlLang: "zh-CN",
    metadata: {
      title: "宋美玉 | UX/UI 设计师 · 以人为本的 AI",
      description:
        "理解人，创造价值。宋美玉的 UX/UI 作品集，通过真实项目展示人本研究、产品思维与 AI 辅助设计。",
    },
    name: "宋美玉",
    languageSwitchLabel: "语言",
    languageLinks,
    navigation: [
      { label: "作品", href: "#projects" },
      { label: "关于", href: "#about" },
      { label: "经历", href: "#experience" },
      { label: "教育", href: "#education" },
      { label: "联系", href: "#contact" },
    ],
    hero: {
      eyebrow: "常驻都柏林的产品与 UX 设计师",
      headline:
        "理解真实的人，把复杂问题转化为清晰、实用的产品体验。",
      summary:
        "我结合用户研究、产品思维、商业理解与交互设计，让数字服务更容易理解，也更有使用价值。",
      availability:
        "目前开放爱尔兰 UX Designer、Product Designer 和 UX Research 相关机会。",
      primaryCta: "查看作品",
      secondaryCta: "联系我",
      skills: [
        "UX / 产品设计",
        "HCI 研究",
        "B2B 网站改版",
        "人本 AI",
        "可持续 UX",
        "跨文化沟通",
      ],
      photoAlt: "宋美玉职业肖像",
      cardKicker: "都柏林 UX / 产品 / HCI 作品集",
      cardSummary: "",
    },
    sections: {
      aboutEyebrow: "我的方向",
      aboutTitle: "我创造价值的三种方式",
      aboutSummary:
        "从表演艺术到人机交互，我把对情绪、表达与现场体验的敏感，转化为 UX 研究、产品思考和叙事型设计能力。我尤其关注那些能让复杂系统更清晰、更可信、更贴近人的数字体验，帮助人们在重要决策中获得更好的支持。",
      projectsEyebrow: "精选作品",
      projectsTitle: "三个核心案例研究",
      experienceEyebrow: "经历",
      experienceTitle: "融合沟通、研究与服务的实践经验",
      educationEyebrow: "教育与奖项",
      educationTitle: "以 HCI 训练为核心，结合表演与沟通基础",
      awardsTitle: "奖项与证书",
      contactEyebrow: "联系",
      contactTitle: "开放 UX、产品与研究相关机会",
      contactSummary:
        "目前常驻爱尔兰都柏林，开放 UX Design、Product Design 和 UX Research 方向的实习、毕业生和初级岗位机会。",
      contactLocation: "爱尔兰都柏林",
      contactAvailability: "开放实习、毕业生和初级岗位",
    },
    labels: {
      problem: "问题",
      process: "过程",
      outcome: "结果",
      experienceRoles: "工作经历选项",
      experienceSkills: "经历相关能力",
      slideshowProgress: "图片轮播进度",
      showSlide: "显示",
    },
    contactLinks: [
      {
        label: "Email",
        href: "mailto:songmeiyu033@gmail.com",
        kind: "email",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/meiyu-song-26a6b4383/",
        kind: "external",
      },
      {
        label: "下载简历",
        href: "/portfolio/docs/meiyu-song-cv.pdf",
        kind: "download",
      },
      {
        label: "抖音",
        href: "https://www.douyin.com/user/MS4wLjABAAAAo9dpeGt_jYrmbUo6kNDz0FVXO8Abq1AGzcIhhhvBZ-8",
        kind: "external",
      },
      {
        label: "小红书",
        href: "https://www.xiaohongshu.com/user/profile/5ba9dec073da1f0001e40e4f?xsec_token=YBiBpbI37uBsF493O6wPzBvmWD_2DaWDiqBwKjhSF9FI8=&xsec_source=app_share&xhsshare=CopyLink&shareRedId=N0hDOUdKRzk9OklDOk4wNjY0Tjs0SjpP&apptime=1793274906&share_id=644ed85279e94e6ebe0e87071dab1ef0",
        kind: "external",
      },

    ],
    capabilities: [
      {
        title: "面向商业清晰度的 UX 与网站设计",
        description:
          "我为真实商业语境设计清晰、有结构、值得信任的数字体验，包括网站审计、信息架构、内容结构、响应式布局和 B2B 沟通。",
      },
      {
        title: "研究驱动的产品思维",
        description:
          "我通过访谈、人物画像、需求梳理、用户旅程、竞品分析、原型设计和评估，把真实用户问题转化为更清晰的产品决策。",
      },
      {
        title: "人本 AI 与伦理叙事",
        description:
          "我关注新兴技术如何影响人的情绪、信任和社会连接，HCI 方向聚焦 AI 陪伴、老年人、伦理 AI、可访问性和互动叙事。",
      },
    ],
    projects: [
      {
        title: "为可持续生物能源公司重新设计 B2B 网站",
        subtitle: "Jianglan Bio-Energy Europe 网站改版",
        description:
          "一个真实实习项目：我帮助一家位于都柏林的可持续生物能源公司提升 B2B 网站的信息结构、表达清晰度和信任感。",
        problem:
          "Jianglan 需要向 B2B 利益相关方清楚传达可持续发展、废弃食用油、SAF、认证、供应链和合作伙伴关系等复杂信息，并让内容显得可信、结构清晰且易于理解。",
        process:
          "我分析现有网站，审视导航和内容层级，识别信任缺口，并把负责人和设计团队的反馈转化为更清晰的信息架构和面向用户的网站优先级。",
        outcome:
          "该项目把改版重点放在信任、清晰度和可持续发展沟通上，展示了如何把商业语言转化为 UX 结构，形成更专业的 B2B 网站体验。",
        details: [
          {
            title: "我的贡献",
            items: [
              "参与网站审计、信息架构梳理和内容结构优化。",
              "围绕 UCO、SAF、认证和供应链议题，强化面向 B2B 用户的信任表达。",
              "把利益相关方反馈转化为可执行的网站设计优先级。",
            ],
          },
          {
            title: "Before / After 重点",
            items: [
              "Before：可持续价值、商业能力和认证信息较难被快速理解为一条连贯的 B2B 叙事。",
              "After：Home、About、Services、Certification 和 Contact 的信息路径更清晰，方便合作伙伴和可持续发展利益相关方理解。",
            ],
          },
        ],
        image: "/portfolio/images/jianglan-redesign.jpg",
        alt: "Jianglan Bio-Energy Europe 网站改版页面",
        tags: [
          "UX 设计",
          "网站改版",
          "可持续发展",
          "B2B",
          "信息架构",
        ],
        evidence: [
          "真实公司实习",
          "都柏林公司",
          "利益相关方沟通",
          "信任设计",
          "Home / About / Services / Certification / Contact",
          "UCO / SAF / 供应链沟通",
        ],
        links: [
          { label: "查看已上线官网", href: "https://www.jl-bioenergy.com/#/home" },
          {
            label: "查看页面",
            href: "/portfolio/images/jianglan-redesign.jpg",
          },
          {
            label: "Figma 原型",
            href: "https://www.figma.com/proto/UrbjSkLVfkpqcY5OzTEEsk/Untitled?node-id=72-6720&p=f&t=yhM4OdZV8cAmHbpv-1&scaling=min-zoom&content-scaling=fixed&page-id=30%3A639",
          },
        ],
      },
      {
        title: "为国际学生设计决策支持平台",
        subtitle: "Global Study Hub (Immigration Cheat Sheets)",
        description:
          "一个为期 13 周的 UX 研究与产品设计项目，帮助国际学生通过更清晰、更可信的信息比较国家、大学和本地环境。",
        problem:
          "国际学生需要处理信息来源碎片化、信任程度不一、本地语境有限，以及在比较留学选项时产生的决策压力。",
        process:
          "项目从问题界定和访谈出发，进入人物画像、需求定义、竞品分析、创意发散、Figma 原型、评估与反思。",
        outcome:
          "Immigration Cheat Sheets 被设计为一个决策支持概念，通过 Quiz、Plan 和 Explore 模块支持更清晰的比较。",
        image: "/portfolio/images/immigration-cheat-sheets.jpg",
        alt: "Immigration Cheat Sheets UX 流程看板",
        tags: [
          "用户研究",
          "产品设计",
          "用户访谈",
          "Figma",
          "国际学生",
        ],
        evidence: [
          "团队学术项目 · 2025",
          "人物画像 + 需求",
          "Quiz / Plan / Explore 原型",
          "评估 + 反思",
        ],
        links: [
          { label: "UXD 报告", href: "/portfolio/docs/uxd-report.pdf" },
          { label: "附录", href: "/portfolio/docs/uxd-appendices.pdf" },
        ],
      },
      {
        title: "面向老年人的人本 AI 陪伴",
        subtitle: "A Day with ElliQ",
        description:
          "一个人本 AI 项目，将关于老年人孤独感的定性 HCI 研究，与围绕 ElliQ 的互动叙事原型结合起来，探索 AI 陪伴如何支持、复杂化或重塑晚年生活中的情感连接。",
        problem:
          "AI 陪伴机器人常被描述为回应晚年孤独的技术方案，但孤独感和社会连接具有复杂的情感层面。这类系统也会带来信任、依赖、隐私、真实性和伦理关怀等问题。",
        process:
          "研究部分包括研究问题、半结构式访谈、情境走查、主题分析和伦理思考；设计部分则把这一议题转化为多场景 ElliQ 故事，结合语音交互、数据可视化和可访问性思考。",
        outcome:
          "这个组合项目展示了从研究到设计的方向：从关于孤独与关怀的 HCI 问题，走向一个让 AI 陪伴伦理议题更具体、更可感知的互动体验。",
        details: [
          {
            title: "Part 1：HCI 研究",
            items: [
              "AI 陪伴机器人、老年人、孤独感、社会连接和情境走查。",
              "伦理重点包括信任、依赖、隐私、真实性和负责任的关怀。",
            ],
          },
          {
            title: "Part 2：互动叙事原型",
            items: [
              "A Day with ElliQ 使用 React、TypeScript、语音交互、数据可视化和可访问阅读模式。",
              "该原型把研究问题转化为可感知的日常生活故事，而不是单纯的技术演示。",
            ],
          },
        ],
        image: "/portfolio/images/elliq-story.jpg",
        alt: "A Day with ElliQ 互动故事首页",
        tags: [
          "人本 AI",
          "HCI 研究",
          "老年人",
          "伦理 AI",
          "互动叙事",
          "React / TypeScript",
        ],
        evidence: [
          "研究问题",
          "情境走查",
          "伦理思考",
          "语音交互",
          "数据可视化",
          "可访问性",
        ],
        links: [
          {
            label: "打开故事",
            href: "https://folk-fig-91932575.figma.site",
          },
          {
            label: "项目 PDF",
            href: "/portfolio/docs/a-day-with-elliq.pdf",
          },
        ],
      },
    ],
    experience: [
      {
        tabLabel: "Jianglan",
        role: "UX 设计实习生",
        organization: "Jianglan Bio-Energy Europe Ltd.",
        location: "爱尔兰都柏林",
        dates: "2026 年 1 月 – 6 月",
        summary:
          "参与 B2B 可持续发展网站的信任、清晰度与沟通改版，内容聚焦废弃食用油回收、可持续航空燃料供应链、认证与国际利益相关方沟通。",
        highlights: [
          "分析现有网站，识别商业能力、可持续价值、认证、供应链语境和国际用户信任方面的沟通问题。",
          "为 B2B 用户和可持续发展利益相关方提出更清晰的信息架构、首页结构、导航优先级和信任导向内容。",
          "把负责人反馈转化为可执行的设计建议，连接商业目标、技术性可持续信息与用户信任。",
        ],
        skills: ["B2B UX", "信息架构", "信任设计", "利益相关方沟通"],
      },
      {
        tabLabel: "AFY Education",
        role: "教育咨询顾问 / 客户体验与运营",
        organization: "AFY Education Technology",
        location: "中国杭州",
        dates: "2023 年 9 月 - 2024 年 9 月",
        summary:
          "提供留学咨询、教育规划、服务匹配、客户关系管理和教育活动运营支持。",
        highlights: [
          "2023 年 9 月至 2024 年 8 月，个人签约销售额约人民币 260 万元，折合约 35 万欧元；获年度优秀服务之星。",
          "通过一对一咨询识别用户需求，并为学生匹配合适的教育服务、导师和学习路径。",
          "管理从初次咨询到转化、跟进、转介绍和复购的完整客户旅程。",
          "策划并主持大型教育品牌活动，包括海外学习粉丝见面会。",
        ],
        skills: ["需求分析", "客户旅程", "客户咨询", "服务匹配"],
      },
      {
        tabLabel: "科技馆",
        role: "科学教育讲师 / 公共参与引导师",
        organization: "浙江省科技馆",
        location: "中国杭州",
        dates: "2021 年 12 月 - 2023 年 8 月",
        summary:
          "设计并开展互动科学教育、公共参与、学校外展和家庭学习活动。",
        highlights: [
          "面向儿童、家庭和学校团体策划并开展互动科学项目，覆盖活动设计、材料准备、现场引导与活动复盘。",
          "结合科学实验、叙事、表演和动手活动，设计体验式学习项目。",
          "撰写宣传文章，并支持官方网站、微信、抖音和本地媒体等渠道的内容发布。",
        ],
        skills: ["工作坊引导", "体验设计", "科学传播", "基于反馈的改进"],
      },
      {
        tabLabel: "青少年宫",
        role: "语言与戏剧讲师",
        organization: "杭州市青少年活动中心",
        location: "中国杭州",
        dates: "2022 年 - 2025 年",
        summary:
          "为儿童和青少年设计表达性语言、叙事、戏剧、沟通和展示课程。",
        highlights: [
          "通过角色扮演、表演、小组讨论和舞台展示设计互动课堂活动。",
          "根据学生年龄、自信程度、学习风格和参与需求调整教学方法。",
          "营造支持性的学习环境，鼓励沟通、自信、公众表达和自我呈现。",
        ],
        skills: ["叙事表达", "学习设计", "展示辅导", "青少年引导"],
      },
    ],
    education: [
      {
        degree: "人机交互理学硕士 · 二等一荣誉学位（2H1）",
        institution: "都柏林大学",
        location: "爱尔兰都柏林",
        dates: "2025 年 8 月 - 2026 年 8 月",
        summary:
          "已完成硕士学位，获得二等一荣誉学位（Second Class Honours, Grade 1）。课程训练涵盖 UX 设计、用户研究、交互设计、数字方法、人本设计、AI 伦理与 HCI 实践。",
        focus: [
          "UX 设计与用户研究",
          "交互设计与 HCI 实践",
          "人本 AI 与 AI 伦理",
          "数字方法与平台分析",
        ],
      },
      {
        degree: "戏剧影视文学 / 表演本科",
        institution: "西安外国语大学",
        location: "中国西安",
        dates: "2016 年 - 2020 年",
        summary:
          "在表演、叙事、观众理解、身体与情绪感知、公共表达和展示方面建立了创意沟通基础。",
        focus: [
          "戏剧与影视相关学习",
          "表演与舞台沟通",
          "叙事与观众参与",
          "创意沟通",
        ],
      },
    ],
    awards: [
      "浙江省科学传播员职业技能竞赛一等奖",
      "浙江省防震减灾科学传播大赛一等奖",
      "全国科技馆辅导员大赛二等奖",
      "教师资格证、普通话二级甲等证书、全国计算机等级考试二级证书",
    ],
    contactSlides: [
      {
        src: contactSlideImages[0],
        alt: "宋美玉在文化阅读活动中主持",
        caption: "公众表达",
      },
      {
        src: contactSlideImages[1],
        alt: "宋美玉参加专业会议",
        caption: "专业沟通",
      },
      {
        src: contactSlideImages[2],
        alt: "宋美玉夜间在户外手持项目文件夹",
        caption: "跨文化经历",
      },
      {
        src: contactSlideImages[3],
        alt: "宋美玉在绿幕演播室",
        caption: "媒体制作",
      },
      {
        src: contactSlideImages[4],
        alt: "宋美玉在舞台上主持活动",
        caption: "活动主持",
      },
      {
        src: contactSlideImages[5],
        alt: "宋美玉在大型舞台上演讲",
        caption: "演讲展示",
      },
      {
        src: contactSlideImages[6],
        alt: "宋美玉在红色大屏前展示",
        caption: "叙事表达",
      },
      {
        src: contactSlideImages[7],
        alt: "宋美玉在照片墙前展示",
        caption: "观众参与",
      },
      {
        src: contactSlideImages[8],
        alt: "宋美玉张开双臂进行展示",
        caption: "引导能力",
      },
      {
        src: contactSlideImages[9],
        alt: "宋美玉对着麦克风讲话",
        caption: "沟通表达",
      },
      {
        src: contactSlideImages[10],
        alt: "宋美玉在舞台上对着麦克风讲话",
        caption: "公共参与",
      },
      {
        src: contactSlideImages[11],
        alt: "宋美玉在公开活动中演讲",
        caption: "公众表达",
      },
      {
        src: contactSlideImages[12],
        alt: "宋美玉在绿幕演播室",
        caption: "演播室工作",
      },
      {
        src: contactSlideImages[13],
        alt: "宋美玉在舞台上表演",
        caption: "舞台表演",
      },
      {
        src: contactSlideImages[14],
        alt: "宋美玉在绿幕演播室",
        caption: "视觉沟通",
      },
      {
        src: contactSlideImages[15],
        alt: "宋美玉佩戴头戴式麦克风展示",
        caption: "现场展示",
      },
      {
        src: contactSlideImages[16],
        alt: "宋美玉身着传统服装",
        caption: "文化叙事",
      },
      {
        src: contactSlideImages[17],
        alt: "宋美玉在文化教育场景中互动",
        caption: "互动学习",
      },
      {
        src: contactSlideImages[18],
        alt: "宋美玉在屏幕旁展示",
        caption: "科学传播",
      },
    ],
  },
}
