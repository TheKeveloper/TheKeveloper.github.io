import { Link, useMatchRoute } from '@tanstack/react-router'
import { Group, Anchor } from '@mantine/core'

const pages = [
  { title: 'Home', route: '/' as const },
  { title: 'Projects', route: '/projects' as const },
  { title: 'Experience', route: '/experience' as const },
]

export function NavigationBar() {
  const matchRoute = useMatchRoute()

  return (
    <Group justify="center" gap="lg" py="sm" style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
      {pages.map((page) => {
        const isActive = !!matchRoute({ to: page.route })
        return (
          <Link
            key={page.route}
            to={page.route}
            style={{ textDecoration: 'none' }}
          >
            <Anchor
              component="span"
              fw={isActive ? 700 : 400}
              c={isActive ? 'blue' : 'dimmed'}
            >
              {page.title}
            </Anchor>
          </Link>
        )
      })}
    </Group>
  )
}
