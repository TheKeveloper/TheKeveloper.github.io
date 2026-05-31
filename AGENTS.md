# Agent Instructions

## Before Completing Any Task

You **must** ensure the following commands all pass before considering a task complete:

```bash
pnpm run compile   # TypeScript type-checking (tsc --noEmit)
pnpm run test      # Run the test suite (vitest run)
pnpm run build     # Full production build (tsc --noEmit && vite build)
```

## Development Setup

This project uses **pnpm** as the package manager. Install dependencies with:

```bash
pnpm install
```

## Key Guidelines

- Use TypeScript for all source files.
- Follow existing code patterns and conventions in the repository.
- Ensure any new components have corresponding tests.
- Do not introduce new dependencies unless absolutely necessary.
