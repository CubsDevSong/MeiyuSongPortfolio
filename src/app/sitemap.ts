import type { MetadataRoute } from "next";

const siteUrl = "https://songmeiyuportfolio.vercel.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-10-27"),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: siteUrl,
          "zh-CN": `${siteUrl}/zh`,
        },
      },
    },
    {
      url: `${siteUrl}/zh`,
      lastModified: new Date("2026-10-27"),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: siteUrl,
          "zh-CN": `${siteUrl}/zh`,
        },
      },
    },
    {
      url: `${siteUrl}/projects/creative-key`,
      lastModified: new Date("2026-10-27"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${siteUrl}/projects/creative-key`,
          "zh-CN": `${siteUrl}/zh/projects/creative-key`,
        },
      },
    },
    {
      url: `${siteUrl}/zh/projects/creative-key`,
      lastModified: new Date("2026-10-27"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${siteUrl}/projects/creative-key`,
          "zh-CN": `${siteUrl}/zh/projects/creative-key`,
        },
      },
    },
  ];
}
