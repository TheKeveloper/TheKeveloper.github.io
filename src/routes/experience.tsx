import { createRoute } from "@tanstack/react-router";
import { ExperiencePage } from "../pages/ExperiencePage";
import { seo } from "../config/seo";
import { rootRoute } from "./__root";

export const experienceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/experience",
  head: () => ({
    meta: seo({
      title: "Experience",
      description:
        "Work experience, internships, and leadership roles held by Kevin Bi.",
      path: "/experience",
    }),
  }),
  component: ExperiencePage,
});
