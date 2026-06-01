import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import { Container } from "@mantine/core";
import { Header } from "../components/Header";
import { NavigationBar } from "../components/NavigationBar";
import { SocialBar } from "../components/SocialBar";
import { seo, siteConfig } from "../config/seo";
import "../css/App.css";

export const rootRoute = createRootRoute({
  head: () => ({
    meta: seo(),
    links: [{ rel: "canonical", href: siteConfig.url }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <Container size="md" py="sm">
        <Header />
        <SocialBar />
        <NavigationBar />
        <Container size="md" mt="sm">
          <Outlet />
        </Container>
      </Container>
    </>
  );
}
