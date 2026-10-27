import { DesignPortfolioPage } from "@/components/portfolio/design-portfolio-page";
import { focusedPortfolioContent } from "@/content/focused-portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...focusedPortfolioContent.en.metadata,
  metadataBase: new URL("https://songmeiyuportfolio.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "zh-CN": "/zh",
    },
  },
  openGraph: {
    title: focusedPortfolioContent.en.metadata.title,
    description: focusedPortfolioContent.en.metadata.description,
    url: "/",
    siteName: "Meiyu Song Portfolio",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/portfolio/images/creative-key/ecosystem.webp",
        width: 1536,
        height: 1024,
        alt: "Creative Key physical and digital service ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: focusedPortfolioContent.en.metadata.title,
    description: focusedPortfolioContent.en.metadata.description,
    images: ["/portfolio/images/creative-key/ecosystem.webp"],
  },
};

export default function Home() {
  return <DesignPortfolioPage content={focusedPortfolioContent.en} />;
}
