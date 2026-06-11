import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { ExperienceItem } from "./ExperienceItem";
import { ExperienceData, formatDateRange } from "../config/experience";

const multiRoleJob: ExperienceData = {
  title: "Acme Corp",
  url: "https://example.com/",
  tags: ["Tech"],
  roles: [
    {
      title: "Senior Engineer",
      start: "2023",
      description: "Leading the platform team.",
      accomplishments: ["Shipped the new platform."],
    },
    {
      title: "Engineer",
      start: "2021",
      end: "2023",
      description: "Built core features.",
    },
  ],
};

const singleRoleJob: ExperienceData = {
  title: "Solo Co",
  tags: ["Finance"],
  roles: [
    {
      title: "Analyst",
      start: "Summer 2020",
      end: "Summer 2020",
      description: "Analyzed things.",
    },
  ],
};

function renderItem(item: ExperienceData) {
  return render(
    <MantineProvider>
      <ExperienceItem item={item} />
    </MantineProvider>,
  );
}

describe("formatDateRange", () => {
  it("shows Present for ongoing roles", () => {
    expect(formatDateRange("2023")).toBe("2023 – Present");
  });

  it("collapses identical start and end dates", () => {
    expect(formatDateRange("Summer 2020", "Summer 2020")).toBe("Summer 2020");
  });

  it("shows a range when start and end differ", () => {
    expect(formatDateRange("2021", "2023")).toBe("2021 – 2023");
  });
});

describe("ExperienceItem", () => {
  it("renders the company, overall date range, and all roles", () => {
    renderItem(multiRoleJob);
    expect(screen.getByText("Acme Corp")).toBeTruthy();
    expect(screen.getByText("2021 – Present")).toBeTruthy();
    expect(screen.getByText("Senior Engineer")).toBeTruthy();
    expect(screen.getByText("Engineer")).toBeTruthy();
    expect(screen.getByText("Tech")).toBeTruthy();
  });

  it("shows only a preview until a role is expanded", async () => {
    renderItem(multiRoleJob);
    const toggle = screen.getByRole("button", {
      name: /expand details for senior engineer/i,
    });
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(screen.getByText("Shipped the new platform.")).not.toBeVisible();

    fireEvent.click(toggle);

    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    await waitFor(() =>
      expect(screen.getByText("Shipped the new platform.")).toBeVisible(),
    );

    fireEvent.click(toggle);
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
  });

  it("only expands the clicked role", () => {
    renderItem(multiRoleJob);
    fireEvent.click(
      screen.getByRole("button", { name: /expand details for engineer/i }),
    );
    expect(
      screen
        .getByRole("button", { name: /expand details for senior engineer/i })
        .getAttribute("aria-expanded"),
    ).toBe("false");
  });

  it("renders single-role jobs without a per-role date", () => {
    renderItem(singleRoleJob);
    expect(screen.getByText("Solo Co")).toBeTruthy();
    expect(screen.getByText("Analyst")).toBeTruthy();
    expect(screen.getAllByText("Summer 2020")).toHaveLength(1);
  });
});
