import { useState } from "react";
import { MultiSelect } from "@mantine/core";
import { ListItem, ItemData } from "./ListItem";
import { ScrollableListView } from "./ScrollableListView";

interface ItemsDisplayProps {
  tags: Record<string, string>;
  items: ItemData[];
}

export function ItemsDisplay({ tags, items }: ItemsDisplayProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const displayedItems = items.filter((item) =>
    selectedTags.every((tag) => item.tags.includes(tag)),
  );

  return (
    <div>
      <MultiSelect
        data={Object.values(tags).map((tag) => ({ value: tag, label: tag }))}
        value={selectedTags}
        onChange={setSelectedTags}
        placeholder="Filter tags..."
        clearable
        searchable
      />
      <ScrollableListView
        items={displayedItems.map((item) => (
          <ListItem key={item.title} item={item} />
        ))}
      />
    </div>
  );
}
