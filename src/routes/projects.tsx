import { createRoute } from "@tanstack/react-router";
import { ProjectsPage } from "../pages/ProjectsPage";
import { rootRoute } from "./__root";

export const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: ProjectsPage,
});
