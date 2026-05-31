import { ReactNode } from 'react'
import { Stack } from '@mantine/core'

interface ScrollableListViewProps {
  items: ReactNode[]
}

export function ScrollableListView({ items }: ScrollableListViewProps) {
  return (
    <Stack gap="sm" mt="sm">
      {items.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
    </Stack>
  )
}
