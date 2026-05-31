import { createRoute } from '@tanstack/react-router'
import { ExperiencePage } from '../pages/ExperiencePage'
import { rootRoute } from './__root'

export const experienceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/experience',
  component: ExperiencePage,
})
