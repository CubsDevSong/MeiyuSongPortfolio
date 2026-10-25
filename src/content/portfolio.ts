import type { PortfolioContent } from "./types"

export const portfolio: PortfolioContent = {
  profile: {
    name: "Meiyu Song",
    headline: "Human-Centred UX Designer based in Dublin.",
    secondaryHeadline:
      "HCI Research | Ethical AI | Sustainability UX | Cross-cultural Experience",
    summary:
      "I combine HCI research, performance-art storytelling, and product design to create clearer, more ethical, and more human digital experiences for complex needs.",
    location: "Dublin, Ireland",
    availability:
      "Currently open to UX Designer, Product Designer, and UX Research opportunities in Ireland.",
    expertise: [
      "UX research",
      "Website redesign",
      "Information architecture",
      "Human-centred AI",
      "Interactive storytelling",
      "Ethical design",
    ],
    highlights: [
      { value: "Real internship", label: "Dublin B2B website redesign" },
      { value: "13-week UXD", label: "Research-to-prototype process" },
      { value: "HCI + AI", label: "Older adults and ethical companionship" },
    ],
    primaryCta: {
      label: "View Work",
      href: "#projects",
    },
    secondaryCta: {
      label: "View Resume",
      href: "#resume",
    },
    photo: {
      src: "/portfolio/images/meiyu-song-profile.jpg",
      alt: "Meiyu Song professional portrait",
      objectPosition: "center",
    },
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
  snapshot: [
    {
      title: "UX Research",
      value: "01",
      description:
        "Semi-structured interviews, personas, user journeys, thematic analysis, scenario walkthroughs, and research synthesis.",
    },
    {
      title: "Product & Web Design",
      value: "02",
      description:
        "Information architecture, Figma prototypes, website redesign, B2B communication, and decision-support product concepts.",
    },
    {
      title: "Human-Centred AI",
      value: "03",
      description:
        "AI companion robots, ethical AI, older adults, trust, loneliness, emotional experience, and social connection.",
    },
    {
      title: "Communication & Storytelling",
      value: "04",
      description:
        "Stakeholder communication, content design, presentation, interactive storytelling, and cross-cultural collaboration.",
    },
  ],
  projects: [
    {
      title: "Redesigning a B2B Website for a Sustainable Bio-Energy Company",
      category:
        "Jianglan Bio-Energy Europe Website Redesign / Real-world B2B UX",
      description:
        "A real-world internship project where I helped improve the structure, clarity, and trustworthiness of a B2B website for a Dublin-based sustainable bio-energy company.",
      problem:
        "Jianglan needed to communicate complex sustainability, used cooking oil, SAF, certification, supply-chain, and partnership information to B2B stakeholders in a way that felt credible, structured, and easy to understand.",
      action:
        "During my Dublin internship, I analysed the existing website, reviewed navigation and content hierarchy, identified trust gaps, and translated director and design-team feedback into clearer information architecture and user-facing website priorities.",
      result:
        "The project positioned the redesign around trust, clarity, and sustainability communication, showing how business language can become UX structure for a more professional B2B website experience.",
      methods: [
        "Website redesign",
        "Information architecture",
        "Trust design",
        "Stakeholder feedback",
      ],
      skills: [
        "UX Design",
        "Website Redesign",
        "Sustainability",
        "B2B UX",
        "Information Architecture",
      ],
      image: {
        src: "/portfolio/images/jianglan-redesign.jpg",
        alt: "Jianglan Bio-Energy Europe website redesign screens",
        objectPosition: "top center",
      },
      evidence: [
        {
          label: "View website screens",
          href: "/portfolio/images/jianglan-redesign.jpg",
        },
        {
          label: "View Figma prototype",
          href: "https://www.figma.com/proto/UrbjSkLVfkpqcY5OzTEEsk/Untitled?node-id=72-6720&p=f&t=yhM4OdZV8cAmHbpv-1&scaling=min-zoom&content-scaling=fixed&page-id=30%3A639",
        },
        { label: "Real company internship" },
        { label: "Dublin-based sustainable bio-energy company" },
        { label: "UCO, SAF, and supply-chain communication" },
        { label: "Boss and design-team communication bridge" },
        { label: "Trust and credibility structure" },
      ],
    },
    {
      title: "Designing a Decision-Support Platform for International Students",
      category: "Immigration Cheat Sheets / UX Research + Product Design",
      description:
        "A 13-week UXD group project exploring how international students make decisions about studying abroad, leading to a platform that helps users compare countries, universities, and local areas through clearer, structured information.",
      problem:
        "International students were not simply missing information. They were dealing with fragmented sources, uneven trust, limited local context, and decision paralysis when comparing study-abroad options.",
      action:
        "Worked through a complete UX process around UN SDG 10.7: problem framing, desk research, semi-structured interviews, synthesis, findings, personas, requirements, competitor analysis, ideation, Figma prototyping, evaluation, and reflection.",
      result:
        "Designed Immigration Cheat Sheets as a decision-support platform with Quiz, Plan, and Explore modules that help users compare countries, universities, and local areas through more trusted and structured information.",
      methods: [
        "User interviews",
        "Personas",
        "Requirements",
        "Prototype evaluation",
      ],
      skills: [
        "UX Research",
        "Product Design",
        "User Interviews",
        "Figma Prototype",
        "International Students",
      ],
      image: {
        src: "/portfolio/images/immigration-cheat-sheets.jpg",
        alt: "Immigration Cheat Sheets UX process board",
        objectPosition: "top center",
      },
      evidence: [
        { label: "UXD report", href: "/portfolio/docs/uxd-report.pdf" },
        { label: "Appendices", href: "/portfolio/docs/uxd-appendices.pdf" },
        { label: "Problem and research process" },
        { label: "Interview insights and findings" },
        { label: "Personas and requirements" },
        { label: "Ideation, prototype, evaluation, reflection" },
      ],
    },
    {
      title: "Exploring AI Companion Robots and Older Adults' Loneliness",
      category: "HCI Research / Human-Centred AI / Ethical Care",
      description:
        "A qualitative HCI research project exploring how older adults may emotionally experience AI companion robots in relation to loneliness, social connection, trust, and ethical care.",
      problem:
        "AI companion robots are often framed as a response to later-life loneliness, but loneliness and social connection are emotionally complex. These systems may offer comfort while raising questions about trust, dependency, privacy, authenticity, and ethical care.",
      action:
        "Developed research questions, participant criteria, semi-structured interview plans, scenario walkthroughs, ethics considerations, and a thematic analysis approach for understanding emotional experience.",
      result:
        "The project frames AI companionship as a responsible design challenge: how to support emotional wellbeing without replacing human connection or weakening trust, agency, and care.",
      methods: [
        "HCI research",
        "Scenario walkthroughs",
        "Interview design",
        "Thematic analysis",
      ],
      skills: [
        "HCI Research",
        "Human-Centred AI",
        "Older Adults",
        "Ethical AI",
        "Qualitative Research",
      ],
      image: {
        src: "/portfolio/images/ai-companion-research.svg",
        alt: "Research map for AI companion robots, older adults, loneliness, trust, and ethical care",
      },
      evidence: [
        { label: "Research questions and interview plan" },
        { label: "Older adults 65+ participant framing" },
        { label: "Scenario walkthrough method" },
        { label: "Loneliness, trust, dependency, and care themes" },
        { label: "Ethics and responsible AI reflection" },
      ],
    },
    {
      title: "A Day with ElliQ: An Interactive Story About AI Companionship",
      category: "Interactive Storytelling / React / Ethical AI",
      description:
        "An interactive news-style project that turns reporting on ElliQ and elderly loneliness into a multi-scene digital experience with voice interaction, data visualisation, and ethical reflection.",
      problem:
        "AI companionship can be presented either as a simple technology solution or as a fear-driven story. The project needed a more human way to show daily routines, emotional support, accessibility, and ethical tradeoffs.",
      action:
        "Created a scene-based experience using morning, afternoon, and evening interactions, voice-oriented moments, data visualisation, accessible reading patterns, and a reflective ethics section.",
      result:
        "The final story translates research into an experience that feels warm but critical, helping viewers understand both the promise and limits of AI companionship in later life.",
      methods: [
        "Interactive storytelling",
        "React / TypeScript",
        "Voice interaction",
        "Data visualisation",
      ],
      skills: [
        "Interactive Storytelling",
        "React",
        "TypeScript",
        "Web Speech API",
        "Accessibility",
      ],
      image: {
        src: "/portfolio/images/elliq-story.jpg",
        alt: "A Day with ElliQ interactive story landing page",
        objectPosition: "top center",
      },
      evidence: [
        {
          label: "Open interactive story",
          href: "https://folk-fig-91932575.figma.site",
        },
        { label: "Project PDF", href: "/portfolio/docs/a-day-with-elliq.pdf" },
        { label: "Morning, afternoon, and evening scenes" },
        { label: "Voice interaction and accessibility thinking" },
        { label: "Ethical reflection on trust and dependency" },
      ],
    },
    {
      title: "How YouTube Search Ranking Shapes Visibility Around AI Companions",
      category: "Digital Methods / Platform Research / Algorithmic Visibility",
      description:
        "A digital methods study using YouTube Data Tools and Rankflow to examine how search rankings shape the visibility of AI companion robot and loneliness-related content.",
      problem:
        "Search rankings are not neutral lists. They influence which videos, claims, emotional framings, and short-form formats become visible when people explore sensitive topics around AI, ageing, and loneliness.",
      action:
        "Collected and compared ranked search results, visualised ranking movement with Rankflow, examined stability and fluctuation, and interpreted how platform visibility is shaped by socio-technical systems.",
      result:
        "The study showed a stable visible core, more fluctuation in lower-ranked results, and the importance of treating algorithmic visibility as a research object rather than objective public attention.",
      methods: [
        "YouTube Data Tools",
        "Rankflow",
        "Data visualisation",
        "Platform analysis",
      ],
      skills: [
        "Digital Methods",
        "Platform Research",
        "Algorithmic Visibility",
        "Data Visualisation",
        "Research Ethics",
      ],
      image: {
        src: "/portfolio/images/youtube-rankflow.svg",
        alt: "Rankflow-style visualisation of YouTube search ranking movement",
      },
      evidence: [
        { label: "Ranking data collection" },
        { label: "Rankflow visualisation" },
        { label: "Stable core and fluctuation analysis" },
        { label: "Platform observability and research ethics" },
      ],
    },
  ],
  experience: [
    {
      role: "UX / Website Redesign Intern",
      organization: "Jianglan Bio-Energy Europe Ltd.",
      tabLabel: "Jianglan",
      location: "Dublin, Ireland",
      dates: "2026 - Present",
      summary:
        "Supporting a trust, clarity, and communication redesign for a B2B sustainability website focused on used cooking oil recycling, sustainable aviation fuel supply chains, certification, and international stakeholder communication.",
      achievements: [
        "Analysed the existing website and identified communication problems around business capability, sustainability value, certification, supply-chain context, and international user trust.",
        "Proposed clearer information architecture, homepage structure, navigation priorities, and trust-focused content for B2B users and sustainability stakeholders.",
        "Worked as a bridge between business goals, technical sustainability information, and user trust by translating director feedback into practical design guidance.",
        "Improved English content presentation so the company's services, mission, supply-chain role, and green aviation narrative are easier to understand.",
      ],
      skills: [
        "B2B UX",
        "Information architecture",
        "Trust design",
        "Stakeholder communication",
        "Business-to-design translation",
      ],
    },
    {
      role: "Education Consultant / Customer Experience & Operations",
      organization: "AFY Education Technology",
      tabLabel: "AFY Education",
      location: "Hangzhou, China",
      dates: "Sep 2023 - Sep 2024",
      summary:
        "Provided study-abroad consultation, education planning, service matching, customer relationship management, and education event operations.",
      achievements: [
        "Identified user needs through one-to-one consultations and matched students with suitable education services, tutors, and learning pathways.",
        "Managed customer relationships across the full service journey from initial consultation to conversion, follow-up, referral, and repeat purchase.",
        "Achieved approximately RMB 2.6 million annual sales revenue with an average of 10.7 monthly orders.",
        "Planned and hosted large-scale education branding events, including an overseas study fan meeting, and received a Best Service Star award.",
      ],
      skills: [
        "Needs analysis",
        "Customer journey",
        "Client consultation",
        "Service matching",
      ],
    },
    {
      role: "Science Education Instructor / Public Engagement Facilitator",
      organization: "Zhejiang Science & Technology Museum",
      tabLabel: "Science Museum",
      location: "Hangzhou, China",
      dates: "Dec 2021 - Aug 2023",
      summary:
        "Designed and delivered interactive science education, public engagement, school outreach, and family learning programmes.",
      achievements: [
        "Delivered over 500 interactive science education sessions for children, families, and school groups.",
        "Designed experiential learning programmes for students aged 6-14 using science experiments, storytelling, performance, and hands-on activities.",
        "Coordinated summer camps, museum workshops, school outreach events, parent-child learning activities, and post-event reflection.",
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
      role: "Language & Drama Instructor",
      organization: "Hangzhou Youth Activity Centre",
      tabLabel: "Youth Centre",
      location: "Hangzhou, China",
      dates: "2022 - 2025",
      summary:
        "Designed expressive language, storytelling, drama, communication, and presentation courses for children and young learners.",
      achievements: [
        "Developed interactive classroom activities using role-play, performance, group discussion, and stage presentation.",
        "Adapted teaching methods based on student age, confidence level, learning style, and participation needs.",
        "Created a supportive learning environment that encouraged communication, confidence, public speaking, and self-expression.",
      ],
      skills: [
        "Storytelling",
        "Learning design",
        "Presentation coaching",
        "Youth facilitation",
      ],
    },
    {
      role: "Channel Sales & Marketing Consultant",
      organization: "Lingchuang International Art Education",
      tabLabel: "Lingchuang",
      location: "Shanghai, China",
      dates: "Jul 2020 - Jun 2021",
      summary:
        "Supported channel development, student recruitment, education product promotion, customer consultation, and offline event conversion.",
      achievements: [
        "Conducted market research, collected customer data, and analysed potential student needs for international art education services.",
        "Planned promotional events, open days, and a graduate portfolio exhibition with an interactive check-in and stamp-collection visitor flow.",
        "Classified visitor information by source and intention level to support follow-up sales, secondary consultations, and service matching.",
        "Supported eight on-site sign-ups during the exhibition, including two full-payment clients.",
      ],
      skills: [
        "Customer segmentation",
        "Offline journey design",
        "Event operations",
        "Conversion support",
      ],
    },
  ],
  education: [
    {
      degree: "MSc Human-Computer Interaction",
      institution: "University College Dublin",
      location: "Dublin, Ireland",
      dates: "2025 - Present",
      summary:
        "Postgraduate training in UX design, user research, interaction design, digital methods, human-centred design, AI ethics, and HCI practice.",
      focusAreas: [
        "UX design and user research",
        "Interaction design and HCI practice",
        "Human-centred AI and AI ethics",
        "Digital methods and platform analysis",
      ],
      thesis:
        "Current project interests include AI companion robots, older adults, loneliness, emotional experience, trust, international student decision-making, platform visibility, and ethical design.",
      skills: [
        "Research design",
        "Critical analysis",
        "Academic writing",
        "Responsible technology",
      ],
    },
    {
      degree: "BA Drama & Film Literature / Performance",
      institution: "Xi'an International Studies University",
      location: "Xi'an, China",
      dates: "2016 - 2020",
      summary:
        "Creative communication foundation in performance, storytelling, audience understanding, body and emotion awareness, public expression, and presentation.",
      focusAreas: [
        "Drama and film-related study",
        "Performance and stage communication",
        "Storytelling and audience engagement",
      ],
      skills: [
        "Narrative thinking",
        "Public speaking",
        "Empathy",
        "Creative communication",
      ],
    },
  ],
  skills: [
    {
      label: "Design",
      skills: [
        "Figma",
        "Wireframing",
        "Prototyping",
        "Website redesign",
        "Information architecture",
        "User flows",
        "B2B UX",
        "Trust design",
      ],
    },
    {
      label: "Research",
      skills: [
        "Semi-structured interviews",
        "Qualitative research",
        "Thematic analysis",
        "Scenario walkthroughs",
        "Personas",
        "User journey mapping",
        "Competitor analysis",
        "Prototype evaluation",
      ],
    },
    {
      label: "Technical",
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Web Speech API",
        "Data visualisation awareness",
        "Responsive design",
      ],
    },
    {
      label: "Communication",
      skills: [
        "Stakeholder communication",
        "Presentation",
        "Storytelling",
        "Content design",
        "Cross-cultural collaboration",
        "Mandarin-English communication",
        "Canva",
      ],
    },
  ],
  awards: [
    {
      title: "First Prize",
      context: "Zhejiang Science Communicator Professional Skills Competition",
    },
    {
      title: "First Prize",
      context:
        "Zhejiang Provincial Earthquake Prevention and Disaster Reduction Science Communication Competition",
    },
    {
      title: "Second Prize",
      context: "National Science Museum Instructor Competition",
    },
    {
      title: "Professional certification",
      context:
        "Teacher Qualification Certificate, Mandarin Proficiency Level 2A, and National Computer Rank Examination Level 2",
    },
  ],
  about: [
    "I started from performance art, where I learned to pay attention to emotion, body language, presence, storytelling, and how people experience a moment.",
    "Through MSc Human-Computer Interaction at University College Dublin, I have been turning that sensitivity into UX research, product thinking, interaction design, and responsible technology practice.",
    "Now I focus on digital experiences that make complex systems clearer, more trustworthy, and more human, especially in AI, older adult care, cross-cultural decision-making, and sustainability communication.",
  ],
  contact: {
    statement:
      "I am currently based in Dublin, Ireland, and open to internship, graduate and junior opportunities in UX Design, Product Design and UX Research.",
    location: "Dublin, Ireland",
    availability: "Open to internship, graduate and junior roles",
    links: [
      { label: "Email", href: "mailto:songmeiyu033@gmail.com" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/meiyu-song-26a6b4383/",
      },
      { label: "Download CV", href: "/portfolio/docs/meiyu-song-cv.pdf" },
    ],
  },
}
