import { describe, it, expect } from "vitest";
import { seo, siteConfig } from "./seo";

function findMeta(
  tags: ReturnType<typeof seo>,
  predicate: (tag: Record<string, string>) => boolean,
): Record<string, string> | undefined {
  return (tags as Record<string, string>[]).find(predicate);
}

describe("seo", () => {
  it("uses site defaults when no options are provided", () => {
    const tags = seo();

    const title = findMeta(tags, (t) => "title" in t);
    expect(title?.title).toBe(siteConfig.title);

    const description = findMeta(tags, (t) => t.name === "description");
    expect(description?.content).toBe(siteConfig.description);
  });

  it("combines a page title with the site name", () => {
    const tags = seo({ title: "Projects" });

    const title = findMeta(tags, (t) => "title" in t);
    expect(title?.title).toBe(`Projects | ${siteConfig.name}`);

    const ogTitle = findMeta(tags, (t) => t.property === "og:title");
    expect(ogTitle?.content).toBe(`Projects | ${siteConfig.name}`);
  });

  it("builds a canonical og:url from a path", () => {
    const tags = seo({ path: "/projects" });

    const ogUrl = findMeta(tags, (t) => t.property === "og:url");
    expect(ogUrl?.content).toBe(`${siteConfig.url}/projects`);
  });

  it("includes Open Graph and Twitter tags", () => {
    const tags = seo({ description: "Custom description" });

    const ogDescription = findMeta(
      tags,
      (t) => t.property === "og:description",
    );
    expect(ogDescription?.content).toBe("Custom description");

    const twitterCard = findMeta(tags, (t) => t.name === "twitter:card");
    expect(twitterCard?.content).toBe("summary");
  });

  it("adds image tags and upgrades the twitter card when an image is set", () => {
    const tags = seo({ image: "/preview.png" });

    const ogImage = findMeta(tags, (t) => t.property === "og:image");
    expect(ogImage?.content).toBe(`${siteConfig.url}/preview.png`);

    const twitterCard = findMeta(tags, (t) => t.name === "twitter:card");
    expect(twitterCard?.content).toBe("summary_large_image");
  });

  it("includes keywords only when provided", () => {
    expect(findMeta(seo(), (t) => t.name === "keywords")).toBeUndefined();

    const tags = seo({ keywords: ["software", "engineer"] });
    const keywords = findMeta(tags, (t) => t.name === "keywords");
    expect(keywords?.content).toBe("software, engineer");
  });
});
