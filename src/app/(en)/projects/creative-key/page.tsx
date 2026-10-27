import type { Metadata } from "next"
import { CreativeKeyCaseStudy } from "@/components/portfolio/creative-key-case-study"

export const metadata: Metadata = {
  metadataBase: new URL("https://songmeiyuportfolio.vercel.app"),
  title: "Creative Key Case Study | Meiyu Song",
  description: "A product and service design case study connecting a public kiosk, a physical Creative Key and a mobile companion.",
  alternates: { canonical: "/projects/creative-key", languages: { en: "/projects/creative-key", "zh-CN": "/zh/projects/creative-key" } },
  openGraph: {
    title: "Creative Key Case Study | Meiyu Song",
    description: "Research, product decisions and prototyping across a kiosk, physical Creative Key and mobile companion.",
    url: "/projects/creative-key",
    type: "article",
    images: [{ url: "/portfolio/images/creative-key/ecosystem.webp", width: 1536, height: 1024, alt: "Creative Key service ecosystem" }],
  },
  twitter: { card: "summary_large_image", images: ["/portfolio/images/creative-key/ecosystem.webp"] },
}

export default function CreativeKeyPage() {
  return <CreativeKeyCaseStudy locale="en" />
}

