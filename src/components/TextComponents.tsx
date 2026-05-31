import { ReactNode } from "react";
import { Title, Box } from "@mantine/core";

interface SectionProps {
  title?: string;
  children?: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <Box>
      {title ? <Title order={3}>{title}</Title> : null}
      <Box>{children}</Box>
    </Box>
  );
}
