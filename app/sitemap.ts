import type { MetadataRoute } from "next";

const BASE_URL = "https://www.aionward.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/contact",
    "/workshops",
    "/ai-for-seniors",
    "/ai-visionaries",
    "/girls-applying-ai",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1.0 : 0.7,
  }));
}
