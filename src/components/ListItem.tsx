import { Card, Text, Group, Badge, Anchor } from "@mantine/core";

export interface ItemData {
  title: string;
  date: string;
  url?: string;
  repo?: string;
  subtitle?: string;
  description: string;
  tags: string[];
}

interface ListItemProps {
  item: ItemData;
}

export function ListItem({ item }: ListItemProps) {
  return (
    <Card withBorder radius="md" padding="sm">
      <Group justify="space-between" wrap="nowrap">
        <Text fw={700} size="lg">
          {item.url ? (
            <Anchor href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </Anchor>
          ) : (
            item.title
          )}{" "}
          {item.repo ? (
            <Anchor
              href={item.repo}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              (GitHub)
            </Anchor>
          ) : null}
        </Text>
        <Text size="sm" c="dimmed">
          {item.date}
        </Text>
      </Group>
      {item.subtitle ? (
        <Text fs="italic" size="sm">
          {item.subtitle}
        </Text>
      ) : null}
      <Text
        size="sm"
        dangerouslySetInnerHTML={{ __html: item.description }}
        mt="xs"
      />
      <Group gap="xs" mt="xs">
        {item.tags.sort().map((tag) => (
          <Badge key={tag} variant="light" size="sm">
            {tag}
          </Badge>
        ))}
      </Group>
    </Card>
  );
}
