import type { Metadata } from "next"
import { CreativeKeyCaseStudy } from "@/components/portfolio/creative-key-case-study"

export const metadata: Metadata = {
  metadataBase: new URL("https://songmeiyuportfolio.vercel.app"),
  title: "Creative Key 产品案例 | 宋美玉",
  description: "连接公共自助终端、实体 Creative Key 和移动端伴侣的产品与服务设计案例。",
  alternates: { canonical: "/zh/projects/creative-key", languages: { en: "/projects/creative-key", "zh-CN": "/zh/projects/creative-key" } },
  openGraph: {
    title: "Creative Key 产品案例 | 宋美玉",
    description: "展示 Creative Key 在研究、产品决策、原型与评估中的完整思考。",
    url: "/zh/projects/creative-key",
    type: "article",
    images: [{ url: "/portfolio/images/creative-key/ecosystem.webp", width: 1536, height: 1024, alt: "Creative Key 服务系统" }],
  },
  twitter: { card: "summary_large_image", images: ["/portfolio/images/creative-key/ecosystem.webp"] },
}

export default function ChineseCreativeKeyPage() {
  return <CreativeKeyCaseStudy locale="zh" />
}

