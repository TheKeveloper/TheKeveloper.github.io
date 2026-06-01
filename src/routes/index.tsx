import { createRoute } from "@tanstack/react-router";
import { HomePage } from "../pages/HomePage";
import { seo } from "../config/seo";
import { rootRoute } from "./__root";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  head: () => ({
    meta: seo({
      path: "/",
    }),
  }),
  component: HomePage,
});
