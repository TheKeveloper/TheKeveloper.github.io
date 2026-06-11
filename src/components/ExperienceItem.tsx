import { useState } from "react";
import {
  Anchor,
  Badge,
  Card,
  Collapse,
  Group,
  List,
  Stack,
  Text,
  Timeline,
  UnstyledButton,
} from "@mantine/core";
import {
  ExperienceData,
  formatDateRange,
  RoleData,
} from "../config/experience";

function Chevron({ opened }: { opened: boolean }) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{
        flexShrink: 0,
        transform: opened ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 200ms ease",
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

interface RoleItemProps {
  role: RoleData;
  showDates: boolean;
}

function RoleItem({ role, showDates }: RoleItemProps) {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <UnstyledButton
        className="role-toggle"
        onClick={() => setOpened((o) => !o)}
        aria-expanded={opened}
        aria-label={`${opened ? "Collapse" : "Expand"} details for ${role.title}`}
        w="100%"
      >
        <Group justify="space-between" wrap="nowrap" gap="xs">
          <Text fw={600} size="sm">
            {role.title}
          </Text>
          <Group gap={6} wrap="nowrap">
            {showDates ? (
              <Text size="sm" c="dimmed" style={{ whiteSpace: "nowrap" }}>
                {formatDateRange(role.start, role.end)}
              </Text>
            ) : null}
            <Chevron opened={opened} />
          </Group>
        </Group>
        {!opened ? (
          <Text size="sm" c="dimmed" lineClamp={1}>
            {role.description}
          </Text>
        ) : null}
      </UnstyledButton>
      <Collapse expanded={opened}>
        <Stack gap="xs" pt={2}>
          <Text size="sm">{role.description}</Text>
          {role.accomplishments?.length ? (
            <List size="sm" spacing={4}>
              {role.accomplishments.map((accomplishment) => (
                <List.Item key={accomplishment}>{accomplishment}</List.Item>
              ))}
            </List>
          ) : null}
        </Stack>
      </Collapse>
    </div>
  );
}

interface ExperienceItemProps {
  item: ExperienceData;
}

export function ExperienceItem({ item }: ExperienceItemProps) {
  const newestRole = item.roles[0];
  const oldestRole = item.roles[item.roles.length - 1];
  const hasMultipleRoles = item.roles.length > 1;

  return (
    <Card withBorder radius="md" padding="md">
      <Group justify="space-between" wrap="nowrap">
        <Text fw={700} size="lg">
          {item.url ? (
            <Anchor href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </Anchor>
          ) : (
            item.title
          )}
        </Text>
        <Text size="sm" c="dimmed" style={{ whiteSpace: "nowrap" }}>
          {formatDateRange(oldestRole.start, newestRole.end)}
        </Text>
      </Group>
      {hasMultipleRoles ? (
        <Timeline bulletSize={10} lineWidth={2} mt="sm" ml={4}>
          {item.roles.map((role) => (
            <Timeline.Item key={`${role.title}-${role.start}`}>
              <RoleItem role={role} showDates />
            </Timeline.Item>
          ))}
        </Timeline>
      ) : (
        <div style={{ marginTop: 4 }}>
          <RoleItem role={newestRole} showDates={false} />
        </div>
      )}
      <Group gap="xs" mt="sm">
        {item.tags.sort().map((tag) => (
          <Badge key={tag} variant="light" size="sm">
            {tag}
          </Badge>
        ))}
      </Group>
    </Card>
  );
}
