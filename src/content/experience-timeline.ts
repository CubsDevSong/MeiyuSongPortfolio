import type { Locale } from "./focused-portfolio"
import { portfolioV2 } from "./portfolio-v2"

export const salesFxReference = {
  date: "2026-10-27",
  cnyPerEur: 7.4343,
  source: "Bank of Lithuania · ECB reference rate",
  url: "https://www.lb.lt/en/currency?class=Eu&currency=CNY&date_from_day=2026-10-27&date_to_day=2026-10-27&type=day",
} as const

type ExperienceKey = "jianglan" | "afy" | "museum" | "drama"

type ExperienceSummary = {
  key: ExperienceKey
  role: string
  capability: string
  description: string
  achievement: string
  skills: string[]
  details: string[]
}

export const experienceTimelineCopy = {
  en: {
    label: "My journey / Experience",
    title: "From People to Products.",
    intro: "A background in design, sales, education and communication — combining human understanding with business value.",
    details: "More details",
    project: "Explore the design project",
    internship: "Design internship",
    pages: "page B2B website",
    directions: "Two design directions, refined through stakeholder feedback.",
    annual: "Approximate personal signed sales · CNY",
    salesPeriod: "Sep 2023 – Aug 2024 reporting period",
    approximate: "Approximate EUR equivalent. Original sales recorded in CNY.",
    monthly: "Monthly personal signed sales",
    total: "Exact recorded total",
    peak: "Peak month",
    source: "Source: user-provided monthly performance summary.",
    rate: "Reference rate",
    photo: "Meiyu Song delivering a science communication demonstration",
    items: [
      {
        key: "jianglan", role: "UX Design Intern", capability: "UX design & digital problem-solving",
        description: "Redesigned a seven-page B2B website for a sustainable aviation fuel company, turning complex technical and sustainability information into clear, user-centred digital experiences.",
        achievement: "7-page B2B website",
        skills: ["Information architecture", "UX/UI design", "Stakeholder collaboration", "Figma prototyping"],
        details: ["Audited a B2B sustainability website and restructured information architecture, navigation and content to help international clients understand technical capabilities, compliance information and supply-chain operations.", "Developed two Figma directions for a seven-page redesign, progressing from low-fidelity wireframes to high-fidelity prototypes and refining the selected direction with company stakeholders.", "Coordinated website testing with 100 participants, identified usability and performance issues, and refined the experience through testing and post-launch client feedback. Following the redesign, the number of visitors leaving contact details increased by approximately 20%."],
      },
      {
        key: "afy", role: "Sales & Education Consultant", capability: "Commercial impact & customer understanding",
        description: "Combined personalised consultation, needs analysis and relationship building with strong sales performance, translating customer needs into commercially valuable service recommendations.",
        achievement: "Commercial impact, grounded in customer understanding.",
        skills: ["Consultative selling", "Customer understanding", "Commercial awareness", "Relationship building"],
        details: ["Approximately RMB 2.6 million in personal signed sales — around €350,000 — during Sep 2023–Aug 2024.", "Managed the customer journey from first consultation through service matching, follow-up and referrals; received the Annual Best Service Star award."],
      },
      {
        key: "museum", role: "Science Education Instructor & Public Engagement Facilitator", capability: "Making complex ideas accessible",
        description: "Delivered interactive science demonstrations and public engagement activities, turning complex concepts into accessible, memorable learning experiences for children, families and school groups.",
        achievement: "Making complex ideas accessible.",
        skills: ["Public engagement", "Science communication", "Audience understanding"],
        details: ["Designed activities, prepared materials and facilitated workshops, adapting explanations to audience questions and participation.", "Supported science storytelling and school outreach, including interactive experiments and science theatre."],
      },
      {
        key: "drama", role: "Language & Drama Instructor", capability: "Storytelling & creative communication",
        description: "Designed and delivered language and drama learning experiences, using storytelling, performance and interactive activities to connect with different learners.",
        achievement: "Storytelling & creative communication.",
        skills: ["Storytelling", "Empathy", "Learning experience design"],
        details: ["Adapted role-play, discussion and presentation activities to learners’ ages, confidence and participation needs."],
      },
    ] satisfies ExperienceSummary[],
  },
  zh: {
    label: "我的旅程 / 职业经历",
    title: "从理解人，到设计产品。",
    intro: "跨越设计、销售、教育与沟通，将对人的理解转化为商业价值。",
    details: "了解更多",
    project: "探索网站设计项目",
    internship: "设计实习经历",
    pages: "页 B2B 网站",
    directions: "形成两个设计方向，并根据利益相关者反馈持续完善。",
    annual: "个人签约业绩约值 · 人民币",
    salesPeriod: "统计周期：2023 年 9 月 — 2024 年 8 月",
    approximate: "欧元金额为参考换算，原始签约业绩以人民币记录。",
    monthly: "个人月度签约业绩",
    total: "原始记录累计金额",
    peak: "单月最高业绩",
    source: "来源：用户提供的月度销售业绩汇总。",
    rate: "参考汇率",
    photo: "宋美玉在舞台上开展科学传播展示",
    items: [
      {
        key: "jianglan", role: "UX 设计实习生", capability: "UX 设计与数字问题解决",
        description: "为可持续航空燃料企业改版七页 B2B 网站，将复杂技术和可持续发展信息转化为清晰、以用户为中心的数字体验。",
        achievement: "七页 B2B 网站设计",
        skills: ["信息架构", "UX/UI 设计", "利益相关者协作", "Figma 原型"],
        details: ["审查 B2B 可持续发展网站，重组信息架构、导航与内容，帮助国际客户理解技术能力、合规信息和供应链业务。", "为七页网站改版形成两个 Figma 设计方向，从低保真线框推进到高保真原型，并根据企业利益相关者反馈完善方案。", "协调 100 名参与者进行网站测试，识别可用性与性能问题，并通过测试及上线后的客户反馈持续调整。改版后，留下联系方式的访客人数增加约 20%。"],
      },
      {
        key: "afy", role: "销售与教育咨询顾问", capability: "商业成果与客户理解",
        description: "通过个性化咨询、需求分析和客户关系建立，将客户需求转化为合适的服务建议，并创造可衡量的销售成果。",
        achievement: "理解客户，让咨询创造商业价值。",
        skills: ["咨询式销售", "客户理解", "商业意识", "客户关系建立"],
        details: ["2023 年 9 月至 2024 年 8 月，个人签约销售额约人民币 260 万元，折合约 35 万欧元。", "管理从首次咨询、服务匹配到后续跟进与转介绍的完整客户旅程；获年度优秀服务之星。"],
      },
      {
        key: "museum", role: "科学教育讲师与公共参与引导师", capability: "让复杂知识更容易理解",
        description: "开展互动科学展示与公众参与活动，将复杂概念转化为儿童、家庭和学校团体容易理解、愿意参与的学习体验。",
        achievement: "让复杂知识变得可理解、可参与。",
        skills: ["公众参与", "科学传播", "受众理解"],
        details: ["设计活动、准备材料、引导工作坊，并根据现场提问与参与情况调整表达方式。", "参与学校外展、互动实验和科学戏剧，把知识转化为可体验的故事。"],
      },
      {
        key: "drama", role: "语言与戏剧讲师", capability: "叙事与创意沟通",
        description: "通过叙事、表演与互动活动设计语言和戏剧课程，与不同学习者建立连接，培养表达与参与的信心。",
        achievement: "用叙事与创意沟通，连接不同的人。",
        skills: ["叙事表达", "同理心", "学习体验设计"],
        details: ["根据学习者的年龄、自信程度与参与需求，调整角色扮演、讨论和展示活动。"],
      },
    ] satisfies ExperienceSummary[],
  },
}

export function getExperienceEntries(locale: Locale) {
  const original = portfolioV2[locale].journey.items
  return experienceTimelineCopy[locale].items.map(entry => {
    const source = original.find(item => item.key === entry.key)
    if (!source) throw new Error(`Missing verified experience: ${entry.key}`)
    return { ...entry, dates: source.dates, organisation: source.organisation }
  })
}
