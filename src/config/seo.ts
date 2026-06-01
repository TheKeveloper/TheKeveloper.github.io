/**
 * Central SEO configuration.
 *
 * This is intentionally simple for now but designed to be extended later.
 * Update `siteConfig` to change the site-wide defaults, and use the `seo()`
 * helper inside a route's `head` option to produce per-page meta tags.
 */

export interface SiteConfig {
  /** The human-readable name of the site / brand. */
  name: string;
  /** Default page title used when a route does not provide its own. */
  title: string;
  /** Default meta description used when a route does not provide its own. */
  description: string;
  /** Canonical base URL of the site (no trailing slash). */
  url: string;
  /** Author / owner of the site. */
  author: string;
  /** Default social sharing image, resolved relative to `url` if not absolute. */
  image?: string;
  /** Twitter handle (including the leading "@"), used for Twitter cards. */
  twitter?: string;
  /** Default Open Graph locale. */
  locale: string;
}

export const siteConfig: SiteConfig = {
  name: "Kevin Bi",
  title: "Kevin Bi",
  description:
    "Personal website of Kevin Bi, a software engineer at Palantir. Projects, experience, and writing.",
  url: "https://kevinbi.com",
  author: "Kevin Bi",
  image: undefined,
  twitter: undefined,
  locale: "en_US",
};

export interface SeoOptions {
  /** Page-specific title. Combined with the site name unless `titleTemplate` is overridden. */
  title?: string;
  /** Page-specific description. Falls back to the site default. */
  description?: string;
  /** Page-specific path (e.g. "/projects") used to build the canonical URL. */
  path?: string;
  /** Page-specific social sharing image. */
  image?: string;
  /** Open Graph type (e.g. "website", "article"). */
  type?: string;
  /** Keywords for the meta keywords tag. */
  keywords?: string[];
}

/** A single meta tag descriptor compatible with TanStack Router's `head`. */
export type MetaTag =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string };

function resolveUrl(path?: string): string {
  if (!path) {
    return siteConfig.url;
  }
  if (/^https?:\/\//.test(path)) {
    return path;
  }
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

function resolveImage(image?: string): string | undefined {
  const resolved = image ?? siteConfig.image;
  if (!resolved) {
    return undefined;
  }
  return /^https?:\/\//.test(resolved)
    ? resolved
    : `${siteConfig.url}${resolved.startsWith("/") ? resolved : `/${resolved}`}`;
}

/**
 * Build the list of meta tags for a route's document head.
 *
 * Pass the result to a route's `head` option:
 *
 * ```ts
 * head: () => ({ meta: seo({ title: "Projects", path: "/projects" }) })
 * ```
 */
export function seo(options: SeoOptions = {}): MetaTag[] {
  const title = options.title
    ? `${options.title} | ${siteConfig.name}`
    : siteConfig.title;
  const description = options.description ?? siteConfig.description;
  const url = resolveUrl(options.path);
  const image = resolveImage(options.image);
  const type = options.type ?? "website";

  const tags: MetaTag[] = [
    { title },
    { name: "description", content: description },
    { name: "author", content: siteConfig.author },

    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: siteConfig.name },
    { property: "og:locale", content: siteConfig.locale },

    // Twitter
    {
      name: "twitter:card",
      content: image ? "summary_large_image" : "summary",
    },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (options.keywords && options.keywords.length > 0) {
    tags.push({ name: "keywords", content: options.keywords.join(", ") });
  }

  if (image) {
    tags.push({ property: "og:image", content: image });
    tags.push({ name: "twitter:image", content: image });
  }

  if (siteConfig.twitter) {
    tags.push({ name: "twitter:site", content: siteConfig.twitter });
    tags.push({ name: "twitter:creator", content: siteConfig.twitter });
  }

  return tags;
}
