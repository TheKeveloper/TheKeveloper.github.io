import { ReactNode, useState } from "react";
import { MultiSelect } from "@mantine/core";
import { ScrollableListView } from "./ScrollableListView";

interface ItemsDisplayProps<T extends { tags: string[] }> {
  tags: Record<string, string>;
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export function ItemsDisplay<T extends { tags: string[] }>({
  tags,
  items,
  renderItem,
}: ItemsDisplayProps<T>) {
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
      <ScrollableListView items={displayedItems.map(renderItem)} />
    </div>
  );
}
