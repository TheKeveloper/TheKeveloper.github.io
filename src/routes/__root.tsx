import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Container } from "@mantine/core";
import { Header } from "../components/Header";
import { NavigationBar } from "../components/NavigationBar";
import { SocialBar } from "../components/SocialBar";
import "../css/App.css";

export const rootRoute = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Container size="md" py="sm">
      <Header />
      <SocialBar />
      <NavigationBar />
      <Container size="md" mt="sm">
        <Outlet />
      </Container>
    </Container>
  );
}
