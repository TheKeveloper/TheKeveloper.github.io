import { createRouter } from '@tanstack/react-router'
import { rootRoute } from './routes/__root'
import { indexRoute } from './routes/index'
import { projectsRoute } from './routes/projects'
import { experienceRoute } from './routes/experience'

const routeTree = rootRoute.addChildren([
  indexRoute,
  projectsRoute,
  experienceRoute,
])

export const router = createRouter({
  routeTree,
  basepath: '/',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
