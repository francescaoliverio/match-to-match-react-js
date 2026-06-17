# Match to Match

> **Connect. Play. Repeat.**
> A mobile + web app to find, meet, and challenge new people in real life, bringing together those who share the same passion for sports and games.

---

## Project Description

**Match to Match** addresses a real and growing need: human relationships are becoming increasingly virtual, communication is deteriorating, and social isolation is on the rise — especially among young people aged 16 and up, an age group where making new connections is particularly challenging.

The app allows users to find people with shared hobbies (sports, video games, board games, and role-playing games), propose or accept a "match", and meet up in person.

**Team:** Gaia Giachero · Alessia Masuzzo · Francesca Oliverio · Fabio Sorrentino  
**Course:** ITS Academy ICT Piemonte — Web & Mobile App Development  
**Framework:** React JS

---

## Technical Requirements
 
### 📦 Props, State & Hooks
 
- **Props** — correct data flow between parent and child components.
- **`useState`** — local state management.
- **`useEffect`** — side effect handling.
- **API calls** — integration of at least one external data source.
### 🌐 Global State — Context API
 
- At least **1 Context** created and configured via a Provider at `<App />` level.
- Context consumed in **at least 2 components** using `useContext`.
### 🧩 Components & Project Structure
 
- Reusable components following the **Single Responsibility** principle.
- Logical and consistent folder structure.
- Components used across multiple contexts where appropriate.
### 🛣️ Routing — React Router
 
- Page navigation managed via **React Router v6**.
- Shared layout using `<Outlet />` for persistent header/footer.
- `NavLink` with active class/style to indicate the current page.
### 🔌 API & Data Fetching
 
- At least **1 external REST API** integrated.
- `fetch` calls in **at least 3 different parts** of the app.
- Visible **loading indicators** during async operations.
- **Error handling** with user-facing messages, retry options, and fallback UI.
### 🎨 Styling & UI/UX
 
- Responsive design across screen sizes.
- Visual consistency throughout the app.
- Interactive states (hover on buttons, links, cards).
- Loading indicators and async feedback.
- Image placeholders/fallbacks for missing or broken images.
- Clean, usable, professional layout.
### 💻 Code Quality
 
- Clean code: correct indentation, no debug `console.log`.
- Consistent naming: descriptive names, **PascalCase** for components, **camelCase** for functions.
- No unhandled errors or warnings in the console.
- Comments where logic or technical decisions are non-obvious.
- API keys stored in `.env`; `.env.example` included for reference.
### 📚 External Libraries Used
 
| Library | Purpose |
|---|---|
| `react` `react-dom` | Core UI framework |
| `react-router-dom` | Client-side routing |
| `@mui/material` `@mui/icons-material` | UI components and icon set (Material Design) |
| `@emotion/react` `@emotion/styled` | CSS-in-JS engine required by MUI |
| `tailwindcss` | Utility-first CSS for custom layout and spacing |
| `clsx` / `cn` | Conditional Tailwind class merging without conflicts |
 
---

## Installation & Setup

```bash
# Clone the repository
git clone <repository-url>

# Enter the project folder
cd match-to-match

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## Commit Conventions

The standard commit format is:

```
// [This commit will...]
type(scope): short description   (max 50 characters)
```

| Type | When to use | Example |
|---|---|---|
| `feat` | New user-facing feature | `feat(profile): add profile page` |
| `fix` | Bug fix | `fix(button): button not responding to click` |
| `refactor` | Rewrite without behavior change | `refactor(card): rename variables` |
| `style` | Pure formatting, zero logic | `style(app): indentation and commas` |
| `docs` | Documentation only | `docs(readme): update README` |
| `test` | Add or fix tests | `test(button): add unit test` |
| `build` | Dependencies and build system | `build: update vite.config` |
| `chore` | General maintenance | `chore: update .gitignore` |
| `perf` | Performance optimization | `perf: reduce re-renders with lazy loading` |
| `revert` | Undo a previous commit | `revert: —` |

---

## Authors

| Name | Role |
|---|---|
| Gaia Giachero | Explore |
| Alessia Masuzzo | Match |
| Fabio Sorrentino | Chat |
| Francesca Oliverio | Profile |