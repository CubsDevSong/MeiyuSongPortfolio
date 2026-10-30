import type { Locale } from "./focused-portfolio"

export type ProcessStage = {
  name: string
  title: string
  question: string
  description: string
  ai: string
  keywords: string[]
}

export const interactivePortfolio = {
  en: {
    nav: [
      { label: "About", href: "#about" },
      { label: "Approach", href: "#process" },
      { label: "Work", href: "#projects" },
      { label: "Background", href: "#background" },
    ],
    hero: {
      label: "01 / Who I am",
      greeting: "Hi, I'm Meiyu.",
      role: "UX/UI Designer · Human-Centred AI",
      motto: ["Understanding people.", "Creating value."],
      intro: "I turn human needs and business challenges into meaningful digital experiences.",
      support: "By combining user research, product thinking, design and AI-assisted workflows, I explore problems, create solutions and continuously improve them.",
      scroll: "Scroll to meet me",
      work: "View work",
      location: "Based in Dublin · Open to design opportunities",
    },
    process: {
      label: "02 / How I create value",
      title: "How I Create\nValue",
      subtitle: "Human-centred thinking. Agile methodology. AI-powered creativity.",
      intro: "I follow an iterative, Agile-inspired design process, using AI to accelerate exploration while keeping people at the centre of every decision.",
      aiLabel: "AI can assist with",
      navigation: "Choose a design stage",
      complete: "See the complete cycle",
      centre: "People first.\nAlways learning.",
      summary: "People guide the problem. AI accelerates the process. Evidence guides the solution.",
      stages: [
        { name: "Discover", title: "Understand people", question: "What's the real problem?", description: "I explore user needs, behaviours and business challenges through research, interviews and stakeholder conversations.", ai: "Desk research, information organisation and early insight exploration.", keywords: ["User research", "Interviews", "Stakeholders", "Discovery"] },
        { name: "Define", title: "Find the right direction", question: "Which problem is worth solving?", description: "I turn research findings into clear problem statements, user requirements and priorities, balancing user needs with business value.", ai: "Insight synthesis, brainstorming and comparison of potential solutions.", keywords: ["Problem definition", "Requirements", "Prioritisation", "Product thinking"] },
        { name: "Design", title: "Turn ideas into experiences", question: "How might we solve it?", description: "I develop user journeys, interface concepts and interactive prototypes, transforming insights into tangible solutions.", ai: "Rapid ideation, content exploration, prototyping and design alternatives.", keywords: ["UX/UI design", "User journeys", "Prototyping", "Figma"] },
        { name: "Test", title: "Learn from real people", question: "Does the solution actually work?", description: "I gather user feedback, test usability and identify what needs to change.", ai: "Feedback organisation, pattern identification and analysis assistance.", keywords: ["Usability testing", "Feedback", "Evaluation", "Validation"] },
        { name: "Iterate", title: "Improve and create value", question: "How can we make it better?", description: "I refine solutions through repeated feedback cycles, prioritise improvements and prepare designs for implementation and further evaluation.", ai: "Iteration planning, documentation and exploring refinements.", keywords: ["Iteration", "Improvement", "Prioritisation", "Delivery"] },
      ] satisfies ProcessStage[],
    },
    work: {
      label: "03 / What I've designed",
      title: "What I've\nDesigned",
      intro: "A selection of projects where I explored real problems through research, design and technology.",
      featured: "Featured project · UX research · Product design · Service design",
      headline: "Making creative opportunities easier to discover and access.",
      description: "Students at UCD faced challenges discovering creative spaces, understanding available resources and knowing how to get started. Working with the Creative Futures Academy project team, I helped develop a connected service experience combining a self-service kiosk, a printed Creative Key and mobile guidance.",
      research: ["30 survey responses", "10 interviews", "3 workshops", "15 evaluation participants"],
      researchLabel: "Team research & evaluation",
      supporting: "More ways of making a difference.",
      explore: "Explore project",
      close: "Close project",
      challenge: "The challenge",
      process: "The design process",
      solution: "The solution",
      evidence: "Evidence & outcome",
      further: "Further exploration",
      role: "Role & context",
      archive: "Original project archive",
      backgroundTitle: "The experience behind the design.",
      backgroundIntro: "Consultative sales, public communication and HCI education inform how I understand people and value.",
      backgroundOpen: "Explore my professional journey & education",
    },
  },
  zh: {
    nav: [
      { label: "关于我", href: "#about" },
      { label: "设计方法", href: "#process" },
      { label: "精选项目", href: "#projects" },
      { label: "职业背景", href: "#background" },
    ],
    hero: {
      label: "01 / 认识我",
      greeting: "你好，我是美玉。",
      role: "UX/UI 设计师 · 以人为本的 AI",
      motto: ["理解人。", "创造价值。"],
      intro: "将真实的人本需求与商业挑战，转化为有意义的数字体验。",
      support: "结合用户研究、产品思维、设计与 AI 辅助工作流，探索问题、形成方案，并在反馈中持续改进。",
      scroll: "向下滚动，认识我",
      work: "查看作品",
      location: "现居都柏林 · 正在寻找设计机会",
    },
    process: {
      label: "02 / 我如何创造价值",
      title: "我如何\n创造价值",
      subtitle: "人本思考 · 敏捷方法 · AI 辅助创意",
      intro: "采用受敏捷理念启发的迭代设计方法，让 AI 加速探索，让人的需求始终成为决策的核心。",
      aiLabel: "AI 可辅助",
      navigation: "选择设计阶段",
      complete: "查看完整设计循环",
      centre: "以人为本。\n持续学习。",
      summary: "人的需求定义问题，AI 加速探索过程，证据支持最终方案。",
      stages: [
        { name: "发现", title: "理解真实的人", question: "真正的问题是什么？", description: "通过研究、访谈及利益相关者沟通，了解用户的需求、行为和业务挑战。", ai: "桌面研究、资料整理与初步洞察探索。", keywords: ["用户研究", "访谈", "利益相关者", "问题发现"] },
        { name: "定义", title: "找到值得解决的问题", question: "哪个问题最值得解决？", description: "将研究证据转化为清晰的问题定义、用户需求与优先级，兼顾用户价值和商业目标。", ai: "洞察归纳、头脑风暴与方案比较。", keywords: ["问题定义", "需求分析", "优先级", "产品思维"] },
        { name: "设计", title: "让想法成为体验", question: "我们可以怎样解决它？", description: "通过用户旅程、界面概念与交互原型，让研究洞察成为可讨论、可体验的设计方案。", ai: "快速构思、内容探索、原型与方案发散。", keywords: ["UX/UI 设计", "用户旅程", "原型", "Figma"] },
        { name: "测试", title: "向真实用户学习", question: "方案真的有用吗？", description: "收集用户反馈，检查可用性，识别需要调整的设计决策。", ai: "反馈整理、模式识别与分析辅助。", keywords: ["可用性测试", "反馈", "评估", "验证"] },
        { name: "迭代", title: "持续改进，创造价值", question: "还能怎样做得更好？", description: "通过反馈循环细化方案，排列改进优先级，为实现和进一步评估做好准备。", ai: "迭代规划、文档与改进方向探索。", keywords: ["迭代", "改进", "优先级", "交付"] },
      ] satisfies ProcessStage[],
    },
    work: {
      label: "03 / 我的设计作品",
      title: "我的\n设计作品",
      intro: "通过研究、设计和技术，回应真实需求的一组项目。",
      featured: "旗舰项目 · UX 研究 · 产品设计 · 服务设计",
      headline: "让创意机会更容易被发现，也更容易迈出第一步。",
      description: "UCD 学生在发现创意空间、理解资源与开始实践时面临障碍。我与 Creative Futures Academy 项目团队共同设计了连接自助终端、实体 Creative Key 和移动端指引的服务体验。",
      research: ["30 份问卷", "10 次访谈", "3 场工作坊", "15 名评估参与者"],
      researchLabel: "团队研究与评估范围",
      supporting: "在不同情境中，回应真实需求。",
      explore: "探索项目",
      close: "关闭项目详情",
      challenge: "面对的挑战",
      process: "设计过程",
      solution: "设计方案",
      evidence: "交付与证据",
      further: "进一步探索",
      role: "角色与项目背景",
      archive: "原始项目资料",
      backgroundTitle: "设计背后的真实经历。",
      backgroundIntro: "咨询销售、公众沟通与 HCI 教育，形成了我理解用户与价值的方式。",
      backgroundOpen: "了解我的职业经历与教育背景",
    },
  },
} as const

export type SupportingProject = {
  id: string
  sourceIndex: number
  title: string
  category: string
  headline: string
  description: string
  role: string
  preview: string
  solution: string
  outcome: string
  archive?: string
  cover?: { src: string; alt: string; width: number; height: number }
  steps: { name: string; text: string }[]
}

export function supportingProjects(locale: Locale): SupportingProject[] {
  const zh = locale === "zh"
  return [
    {
      id: "jianglan", sourceIndex: 0, title: "Jianglan Bio-Energy",
      cover: { src: "/portfolio/images/jianglan/from-waste-to-wing.jpg", alt: zh ? "蒋蓝能源网站的 From Waste to Wing 首页设计" : "Jianglan Energy's From Waste to Wing homepage design", width: 1600, height: 1236 },
      category: zh ? "B2B 网站改版 · UX/UI 设计" : "B2B website redesign · UX/UI design",
      preview: zh ? "重新梳理可持续燃料企业的信息架构，将产品、供应链与合作路径转化为清晰的数字体验。" : "A B2B website redesign that makes sustainable fuel products, supply chains and partnership pathways easier to understand.",
      headline: zh ? "让复杂信息成为清晰的商业沟通。" : "Making complex information clear for business customers.",
      description: zh ? "面向国际商业客户，梳理技术、合规与供应链信息。通过七页网站架构和两个 Figma 设计方向，让企业能力与联系路径更清晰。" : "A sustainable aviation fuel company needed clearer technical, sustainability and supply-chain information for international business audiences. I developed two Figma directions and a seven-page B2B information architecture with clearer contact pathways.",
      role: zh ? "UX 设计实习生 · 2026 年 1–6 月 · 都柏林" : "UX Design Intern · Jan–Jun 2026 · Dublin",
      solution: zh ? "围绕企业介绍、服务、认证与联系，建立更清晰的信息层级与可信线索，帮助潜在合作伙伴了解公司能力。" : "A clearer hierarchy across company, services, certification and contact content helps potential partners understand the company's capability and next steps.",
      outcome: zh ? "形成两个 Figma 方向及七页网站改版，协调 100 名参与者进行测试。改版后，留下联系方式的访客人数增加约 20%。" : "Two Figma directions and a seven-page redesign, with website testing involving 100 participants. Following the redesign, the number of visitors leaving contact details increased by approximately 20%.",
      steps: zh ? [
        { name: "发现", text: "理解企业的 B2B 受众、可持续发展与技术沟通需求。" },
        { name: "定义", text: "梳理信息优先级，让合作伙伴更容易理解能力、认证与服务。" },
        { name: "设计", text: "从低保真线框推进到高保真原型，形成两个 Figma 方向和七页网站改版。" },
        { name: "测试", text: "协调 100 名参与者测试网站，识别可用性与性能问题，并整理反馈。" },
        { name: "迭代", text: "结合测试、企业利益相关者及上线后的客户反馈，完善内容与联系路径。" },
      ] : [
        { name: "Discover", text: "Understand B2B audiences and the company's technical and sustainability communication needs." },
        { name: "Define", text: "Prioritise capability, certification and service information around partner questions." },
        { name: "Design", text: "Progress from low-fidelity wireframes to high-fidelity prototypes across two Figma directions and a seven-page redesign." },
        { name: "Test", text: "Coordinate website testing with 100 participants to identify usability and performance issues." },
        { name: "Iterate", text: "Refine content and enquiry pathways through stakeholder reviews, testing and post-launch client feedback." },
      ],
    },
    {
      id: "elliq", sourceIndex: 2, title: "A Day with ElliQ",
      category: zh ? "互动叙事 · 以人为本的 AI" : "Interactive storytelling · Human-centred AI",
      preview: zh ? "将信任、情感连接与老年生活中的 AI 陪伴，转化为一个可以探索的互动故事。" : "An interactive story exploring trust, emotional connection and AI companionship in the everyday lives of older adults.",
      headline: zh ? "探索 AI 陪伴中，属于人的那一面。" : "Exploring the human side of AI companionship.",
      description: zh ? "AI 陪伴引出了关于信任、情感连接与老年生活的问题。通过互动叙事网站，将这些议题转化为可体验的日常故事。" : "AI companions raise questions about trust, connection and everyday life for older adults. An interactive storytelling website makes these themes tangible through a daily-life narrative.",
      role: zh ? "交互设计与互动叙事 · 2025 · 个人学术项目" : "Interaction design & interactive storytelling · 2025 · Individual academic project",
      solution: zh ? "以多场景故事、语音交互时刻、数据可视化与可访问阅读，呈现陪伴技术的可能性和伦理张力。" : "A multi-scene digital story combines voice-oriented moments, data visualisation and accessible reading to explore companionship and its ethical tensions.",
      outcome: zh ? "交付互动叙事原型与项目文档。它表达对人机关系的设计思考；并不证明 AI 陪伴可以减少孤独感。" : "An interactive storytelling prototype and project documentation. It communicates design thinking about human–AI relationships; it does not demonstrate that AI reduces loneliness.",
      steps: zh ? [
        { name: "发现", text: "围绕老年人孤独感、陪伴与人机关系，查阅研究和情境材料。" },
        { name: "定义", text: "聚焦信任、隐私、依赖与真实连接等叙事主题。" },
        { name: "设计", text: "通过互动叙事、界面与前端原型，将抽象议题转化为日常场景。" },
        { name: "评估边界", text: "现有资料未确认正式评估人数与结果，因此不提供未经验证的测试结论。" },
        { name: "下一步", text: "进一步评估故事理解、可访问性与用户对 AI 的认知变化。" },
      ] : [
        { name: "Discover", text: "Explore loneliness, companionship and human–AI relationships through research and contextual material." },
        { name: "Define", text: "Focus the story on trust, privacy, dependency and authentic connection." },
        { name: "Design", text: "Translate abstract questions into daily-life scenes, interactions and a front-end prototype." },
        { name: "Evaluate", text: "Formal evaluation participants and results are not established in the available materials." },
        { name: "Next", text: "Evaluate story comprehension, accessibility and how the experience shapes perceptions of AI." },
      ],
    },
    {
      id: "global-study", sourceIndex: 1, title: "Global Study Hub",
      category: zh ? "UX 研究 · 留学生体验设计" : "UX research · Student experience design",
      preview: zh ? "通过用户研究与 Quiz、Plan、Explore 原型，帮助国际学生理清零散信息与留学选择。" : "Research and Quiz, Plan and Explore prototypes help international students make sense of fragmented information and study-abroad choices.",
      headline: zh ? "让留学决策，更容易理清方向。" : "Making the study-abroad journey easier to navigate.",
      description: zh ? "国际学生面对零散信息与留学选择的不确定性。团队通过用户研究、旅程和界面设计，形成更集中、清晰的学生支持概念。" : "International students face fragmented information and uncertainty when planning to study abroad. A collaborative UX project developed a centralised support concept with clearer guidance, journeys and resources.",
      role: zh ? "UX 研究与产品设计 · 2025 · 13 周团队学术项目" : "UX research & product design · 2025 · 13-week team academic project",
      archive: "Immigration Cheat Sheets",
      solution: zh ? "通过 Quiz、Plan 与 Explore 模块，支持用户比较国家、大学和生活区域，形成更清晰的决策路径。" : "Quiz, Plan and Explore modules support comparison of countries, universities and local areas through a clearer decision journey.",
      outcome: zh ? "交付人物画像、需求与 Figma 原型，并通过启发式评估及单人出声思考测试调整引导、问答提示和导航。报告与附录保留原题 Immigration Cheat Sheets。" : "Personas, requirements and a Figma prototype, refined through heuristic evaluation and a single-participant think-aloud session. Reports and appendices retain the original title, Immigration Cheat Sheets.",
      steps: zh ? [
        { name: "发现", text: "团队通过访谈探索留学信息碎片化与信任问题。" },
        { name: "定义", text: "梳理人物画像、需求、竞争方案与决策优先级。" },
        { name: "设计", text: "形成 Quiz、Plan 与 Explore 的旅程及 Figma 原型。" },
        { name: "评估", text: "通过启发式评估和单人出声思考测试，调整引导、问答提示和导航。" },
        { name: "下一步", text: "进一步验证信息可信度、比较效率与本地情境覆盖。" },
      ] : [
        { name: "Discover", text: "Team interviews explored fragmented information and trust in the study-abroad journey." },
        { name: "Define", text: "Develop personas, requirements, competitor analysis and decision priorities." },
        { name: "Design", text: "Create journeys and Figma prototypes for Quiz, Plan and Explore." },
        { name: "Evaluate", text: "Refine onboarding, quiz guidance and navigation using heuristic evaluation and a single-participant think-aloud session." },
        { name: "Next", text: "Further validate information trust, comparison effort and coverage of local context." },
      ],
    },
  ]
}
