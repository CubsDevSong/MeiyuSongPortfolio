import { DesignPortfolioPage } from "@/components/portfolio/design-portfolio-page";
import { focusedPortfolioContent } from "@/content/focused-portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...focusedPortfolioContent.zh.metadata,
  metadataBase: new URL("https://songmeiyuportfolio.vercel.app"),
  alternates: {
    canonical: "/zh",
    languages: {
      en: "/",
      "zh-CN": "/zh",
    },
  },
  openGraph: {
    title: focusedPortfolioContent.zh.metadata.title,
    description: focusedPortfolioContent.zh.metadata.description,
    url: "/zh",
    siteName: "宋美玉作品集",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/portfolio/images/creative-key/ecosystem.webp",
        width: 1536,
        height: 1024,
        alt: "Creative Key 实体与数字服务系统",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: focusedPortfolioContent.zh.metadata.title,
    description: focusedPortfolioContent.zh.metadata.description,
    images: ["/portfolio/images/creative-key/ecosystem.webp"],
  },
};

export default function ChineseHome() {
  return <DesignPortfolioPage content={focusedPortfolioContent.zh} />;
}
