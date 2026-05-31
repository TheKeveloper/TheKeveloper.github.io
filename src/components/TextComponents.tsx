import { ReactNode } from 'react'

interface SectionProps {
  title?: string
  children?: ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <div>
      {title ? (
        <div className="row">
          <h3>{title}</h3>
        </div>
      ) : null}
      <div className="row">{children}</div>
    </div>
  )
}
