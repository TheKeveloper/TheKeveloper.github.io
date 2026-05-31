import { NavLink } from "react-router-dom";
import { Group, Anchor } from "@mantine/core";
import pages from "../config/pages";

export function NavigationBar() {
  return (
    <Group
      justify="center"
      gap="lg"
      py="sm"
      style={{ borderBottom: "1px solid var(--mantine-color-gray-3)" }}
    >
      {pages.map((page) => (
        <NavLink
          key={page.route}
          to={page.route}
          end
          style={{ textDecoration: "none" }}
        >
          {({ isActive }) => (
            <Anchor
              component="span"
              fw={isActive ? 700 : 400}
              c={isActive ? "blue" : "dimmed"}
            >
              {page.title}
            </Anchor>
          )}
        </NavLink>
      ))}
    </Group>
  );
}
