import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import {
  RouterProvider,
  createRouter,
  createMemoryHistory,
} from "@tanstack/react-router";
import { rootRoute } from "./routes/__root";
import { indexRoute } from "./routes/index";
import { projectsRoute } from "./routes/projects";
import { experienceRoute } from "./routes/experience";

const routeTree = rootRoute.addChildren([
  indexRoute,
  projectsRoute,
  experienceRoute,
]);

describe("App", () => {
  it("renders without crashing", async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ["/"] }),
    });

    render(
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>,
    );

    await screen.findByText("Kevin Bi");
    expect(screen.getByText("Kevin Bi")).toBeTruthy();
  });
});
