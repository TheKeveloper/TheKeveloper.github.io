# TheKeveloper.github.io

My personal website built with React, TypeScript, and Vite.

## Repository Structure

```
├── src/                   # Application source code
│   ├── components/        # Reusable React components (Header, NavigationBar, etc.)
│   ├── pages/             # Page-level components (HomePage, ExperiencePage, ProjectsPage)
│   ├── config/            # Configuration files
│   ├── css/               # Stylesheets
│   ├── App.tsx            # Root application component
│   ├── App.test.tsx       # Application tests
│   ├── main.tsx           # Application entry point
│   └── Utils.ts           # Utility functions
├── public/                # Static assets served as-is
├── .github/workflows/     # CI/CD workflow definitions
├── vite.config.ts         # Vite bundler configuration
├── vitest.config.ts       # Vitest test runner configuration
├── tsconfig.json          # TypeScript configuration
├── postcss.config.cjs     # PostCSS configuration (Mantine)
└── package.json           # Dependencies and scripts
```

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Mantine
- **Testing**: Vitest + React Testing Library
- **Package Manager**: pnpm

## Development

```bash
pnpm install        # Install dependencies
pnpm run dev        # Start dev server
pnpm run compile    # Type-check with TypeScript
pnpm run build      # Type-check and build for production
pnpm run test       # Run tests
```
