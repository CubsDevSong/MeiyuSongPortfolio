import { DesignPortfolioPage } from "@/components/portfolio/design-portfolio-page";
import { focusedPortfolioContent } from "@/content/focused-portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...focusedPortfolioContent.en.metadata,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "zh-CN": "/zh",
    },
  },
};

export default function Home() {
  return <DesignPortfolioPage content={focusedPortfolioContent.en} />;
}
