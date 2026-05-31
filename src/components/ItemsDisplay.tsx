import { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { ListItem, ItemData } from './ListItem'
import { ScrollableListView } from './ScrollableListView'

interface ItemsDisplayProps {
  tags: Record<string, string>
  items: ItemData[]
}

export function ItemsDisplay({ tags, items }: ItemsDisplayProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const animatedComponents = makeAnimated()

  const handleChange = (selected: unknown) => {
    if (selected && Array.isArray(selected)) {
      setSelectedTags(selected.map((s: { value: string }) => s.value))
    } else {
      setSelectedTags([])
    }
  }

  const displayedItems = items.filter((item) =>
    selectedTags.every((tag) => item.tags.includes(tag))
  )

  return (
    <div className="ItemDisplay">
      <Select
        isMulti
        closeMenuOnSelect={false}
        name="tags"
        options={Object.values(tags).map((tag) => ({ value: tag, label: tag }))}
        className="basic-multi-select"
        classNamePrefix="select"
        components={animatedComponents}
        onChange={handleChange}
        placeholder="Filter tags..."
      />
      <ScrollableListView
        items={displayedItems.map((item) => (
          <ListItem key={item.title} item={item} />
        ))}
      />
    </div>
  )
}
