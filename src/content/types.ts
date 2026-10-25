export type Cta = {
  label: string
  href?: string
  disabledReason?: string
}

export type Highlight = {
  label: string
  value: string
}

export type ProfileContent = {
  name: string
  headline: string
  secondaryHeadline: string
  summary: string
  location: string
  availability: string
  expertise: string[]
  highlights: Highlight[]
  primaryCta: Cta
  secondaryCta: Cta
  photo?: {
    src: string
    alt: string
    objectPosition?: string
  }
}

export type SnapshotContent = {
  title: string
  value: string
  description: string
}

export type EvidenceLink = {
  label: string
  href?: string
}

export type ProjectImage = {
  src: string
  alt: string
  objectPosition?: string
}

export type ProjectContent = {
  title: string
  category: string
  description: string
  problem: string
  action: string
  result: string
  methods: string[]
  skills: string[]
  image?: ProjectImage
  evidence?: EvidenceLink[]
}

export type ExperienceContent = {
  role: string
  organization: string
  tabLabel: string
  location: string
  dates: string
  summary: string
  achievements: string[]
  skills: string[]
}

export type EducationContent = {
  degree: string
  institution: string
  location: string
  dates: string
  summary: string
  focusAreas: string[]
  thesis?: string
  skills: string[]
}

export type SkillGroupContent = {
  label: string
  skills: string[]
}

export type AwardContent = {
  title: string
  context: string
}

export type ContactLink = {
  label: string
  href?: string
}

export type ContactContent = {
  statement: string
  location: string
  availability?: string
  links: ContactLink[]
}

export type PortfolioContent = {
  profile: ProfileContent
  navigation: { label: string; href: string }[]
  snapshot: SnapshotContent[]
  projects: ProjectContent[]
  experience: ExperienceContent[]
  education: EducationContent[]
  skills: SkillGroupContent[]
  awards: AwardContent[]
  about: string[]
  contact: ContactContent
}
