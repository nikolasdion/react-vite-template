<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

---

description: 'ReactJS development standards and best practices'
applyTo: '**/\*.jsx, **/_.tsx, \*\*/_.js, **/\*.ts, **/_.css, \*\*/_.scss'

---

# React Best Practices (Summary)

- **Component-based:** Build UIs from small, reusable function components. Each component should do one thing well.
- **JSX close to logic:** Keep markup (JSX) and related logic together in the same file for maintainability.
- **Props for data flow:** Pass data to components via props. Use array `map()` for lists, and `if` for conditional rendering.
- **Hooks for state/effects:** Use `useState` for local state, `useEffect` for side effects, and custom hooks for reusable logic.
- **Unidirectional data flow:** Data flows down from parent to child. Avoid unnecessary shared state.
- **Keep components pure:** Components should return the same output for the same input (props/state), and avoid side effects in the render body.
- **Add interactivity as needed:** Only add state and event handlers where needed. Keep components as simple as possible.
- **Accessibility:** Use semantic HTML and ARIA attributes. Ensure keyboard navigation works.
- **Performance:** Use `React.memo`, `useMemo`, and `useCallback` only when profiling shows a real need.

# AI Coding Agent Instructions for `react-vite-template`

This project is a minimal, modern React 19 + TypeScript + Vite template with Tailwind CSS and Vitest for testing. Use these guidelines to maximize productivity and consistency when contributing code or automating workflows.

## Architecture & Structure

- **Entry point:** `src/main.tsx` mounts the root `App` component with React 19 StrictMode.
- **Component organization:** All UI and logic live in `src/`. The main app is in `src/App.tsx`.
- **Styling:** Uses Tailwind CSS via `@tailwindcss/vite` and a single global stylesheet `src/index.css` (just `@import "tailwindcss";`).
- **TypeScript:** Strict mode is enforced via `tsconfig.app.json` and `tsconfig.node.json`. Use type annotations for all props and exported functions.
- **Testing:** Uses Vitest (`vitest`), with setup in `src/setupTests.ts` and example test in `src/App.test.tsx`. Test environment is `jsdom`.
- **Linting:** ESLint is configured in `eslint.config.ts` (see also README for advanced config). Lint with `npm run lint`.
- **Build:** Vite is the build tool. Use `npm run build` for production builds, `npm run dev` for local HMR dev server.
- **No routing or state management libraries** are included by default—add as needed.

## Key Workflows

- **Start dev server:** `npm run dev` (or VS Code task "Vite: Dev Server")
- **Run tests:** `npm run test` (runs Vitest, not Jest)
- **Build for production:** `npm run build`
- **Lint:** `npm run lint`
- **Preview production build:** `npm run preview`

## Project Conventions

- **Functional components only.** Use hooks for state/effects. Example: see `src/App.tsx`.
- **Tailwind for all styling.** No CSS modules or styled-components. Use utility classes in `className`.
- **TypeScript everywhere.** All files in `src/` are `.tsx` or `.ts`.
- **Testing:** Use [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) for all component tests. See `src/App.test.tsx` for style.
- **No custom routing or state management patterns**—keep it simple unless requirements change.
- **ESLint:** Use the provided config. For stricter or type-aware rules, see README for extending ESLint.

## Integration Points & Dependencies

- **Vite plugins:** `@vitejs/plugin-react-swc` (default), `@tailwindcss/vite`.
- **Testing:** Vitest, @testing-library/react, @testing-library/jest-dom.
- **Linting:** ESLint, eslint-plugin-react, eslint-plugin-react-hooks.
- **TypeScript:** Strict mode, modern config. See `tsconfig.app.json`.

## Examples

- **Component:**
  ```tsx
  // src/App.tsx
  function App() {
    return <div className="font-bold">Hello, world.</div>;
  }
  ```
- **Test:**
  ```tsx
  // src/App.test.tsx
  import { render, screen } from "@testing-library/react";
  import App from "./App";
  test("renders Hello, world", () => {
    render(<App />);
    expect(screen.getByText(/Hello, world/i)).toBeInTheDocument();
  });
  ```

## References

- [README.md](../README.md) — for ESLint expansion and plugin details
- [vite.config.ts](../vite.config.ts) — Vite and plugin setup
- [eslint.config.ts](../eslint.config.ts) — Linting rules
- [tsconfig.app.json](../tsconfig.app.json) — TypeScript strictness
- [src/App.tsx](../src/App.tsx) — Main component pattern
- [src/App.test.tsx](../src/App.test.tsx) — Testing pattern

---

For more, see the README and config files. If any conventions or workflows are unclear, ask for clarification or check the referenced files.
