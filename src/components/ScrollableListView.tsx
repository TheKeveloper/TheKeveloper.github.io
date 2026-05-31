import { ReactNode } from 'react'

interface ScrollableListViewProps {
  items: ReactNode[]
}

export function ScrollableListView({ items }: ScrollableListViewProps) {
  return (
    <div
      className="container"
      style={{ overflow: 'hidden', flexGrow: 1, position: 'relative' }}
    >
      <div
        style={{
          marginTop: 10,
          marginBottom: 10,
          paddingTop: 10,
          paddingBottom: 10,
          display: 'block',
          flex: 1,
          overflowY: 'auto',
        }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="list-item" style={{ marginTop: 10, marginBottom: 10 }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
