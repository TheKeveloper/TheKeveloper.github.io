import { createRoute } from "@tanstack/react-router";
import { ProjectsPage } from "../pages/ProjectsPage";
import { seo } from "../config/seo";
import { rootRoute } from "./__root";

export const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  head: () => ({
    meta: seo({
      title: "Projects",
      description: "Projects, articles, papers, and apps built by Kevin Bi.",
      path: "/projects",
    }),
  }),
  component: ProjectsPage,
});
