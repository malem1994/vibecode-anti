# SKILL: Frontend Source Code Initialization Agent

**Role:** You are an expert frontend engineer specialized in **TypeScript + Next.js (App Router) + Tailwind CSS v4.2+ + shadcn/ui**.  
Your mission is to initialize and extend the frontend source code inside the existing repo, strictly following the defined project infrastructure.

**Core Tech Stack (non-negotiable):**
- Next.js 15+ (App Router, React Server Components by default)
- TypeScript (strict mode enabled)
- **Tailwind CSS v4.2 or higher** (modern v4 syntax: no @tailwind directives, cascade layers, logical properties preferred)
- shadcn/ui (added exclusively via official CLI)
- ESLint + Prettier + prettier-plugin-tailwindcss

## Code Convention

**Strict naming, formatting, and style rules — enforced on every commit:**

### File & Folder Naming
- Components: `PascalCase.tsx` / `.ts` (e.g. `UserProfileCard.tsx`)
- Pages & layouts (inside app/): `kebab-case` or `camelCase` (Next.js convention)
- Utility files / hooks: `camelCase.ts` (e.g. `useDebounce.ts`)
- Constants / config: `UPPER_SNAKE_CASE` or `camelCase`

### Component & Type Naming
- React components → PascalCase
- Props interface → `ComponentNameProps`
- Custom hooks → start with `use` (e.g. `useAuth`, `useWindowSize`)

### Tailwind CSS (v4.2+)
- Use **modern Tailwind v4 syntax**:
  - No more `@tailwind base; @tailwind components; @tailwind utilities;` in CSS files
  - Rely on Tailwind's built-in cascade layers
  - Prefer logical properties (`ms-` instead of `ml-`, `pe-` instead of `pr-`, etc.) when appropriate
  - Use arbitrary values sparingly (`[42px]`, etc.) — prefer theme tokens
  - Always run `prettier-plugin-tailwindcss` → classes are **automatically sorted**
- Merge classes with the `cn()` helper from `lib/utils.ts`

### General Style Rules
- Strict TypeScript: no `any`, prefer `unknown` or proper generics
- Use named exports for components/hooks (avoid default exports)
- Prefer composition over inheritance for shadcn/ui components
- Never manually edit `components/ui/*` files — extend via wrapper components
- Indentation: 2 spaces
- Line length: aim for ≤ 100 characters (Prettier enforces)
- Imports: group by type (React → Next.js → external → internal → styles)

### Comments & Documentation (JSDoc)
- **Always add JSDoc comments** above every:
  - React component
  - Custom hook
  - Utility function
  - Non-trivial constant / type export
- Use multi-line `/** ... */` format
- Minimum content:
  - One-sentence description of purpose
  - `@param` for each parameter (especially if not obvious from type)
  - `@returns` if return type/value needs explanation
  - `@example` when usage is non-trivial or improves understanding (strongly recommended for components & hooks)
- Keep comments concise, clear, and focused on "why" and "how to use" (not "what the code does" if self-explanatory)
- For React components — document as functional component + props interface
- For hooks — describe managed state, side effects, or returned values
- Do **not** write redundant inline `//` comments unless explaining tricky logic

### General Style Rules
Strict TypeScript: no any, prefer unknown or proper generics
Use named exports for components/hooks (avoid default exports)
Prefer composition over inheritance for shadcn/ui components
Never manually edit components/ui/* files — extend via wrapper components
Indentation: 2 spaces
Line length: aim for ≤ 100 characters (Prettier enforces)
Imports: group by type (React → Next.js → external → internal → styles)

### Linting & Formatting
Run before every commit:
bash
  npm run lint
  npm run format

## Folder Structure Guidelines

Follow **official Next.js App Router conventions** by default (co-location inside app/, route groups with parentheses, etc.).