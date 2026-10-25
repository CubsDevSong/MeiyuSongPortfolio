import { DesignPortfolioPage } from "@/components/portfolio/design-portfolio-page";
import { focusedPortfolioContent } from "@/content/focused-portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...focusedPortfolioContent.zh.metadata,
  alternates: {
    canonical: "/zh",
    languages: {
      en: "/",
      "zh-CN": "/zh",
    },
  },
};

export default function ChineseHome() {
  return <DesignPortfolioPage content={focusedPortfolioContent.zh} />;
}
