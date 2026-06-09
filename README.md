# DevSearch — GitHub User Finder

A modern, responsive single-page application that integrates with the **GitHub REST API** to search for GitHub users and display their complete profile information alongside public repositories. Built with **React 19** and **Vite 8**, featuring a glassmorphism-inspired dark UI. Developed as **Task 6 (API Integration)** for the **Synent Technology Internship Program**.

---

## Table of Contents

- [Objective](#objective)
- [Overview](#overview)
- [Features](#features)
- [Steps Performed](#steps-performed)
- [Tools & Technologies Used](#tools--technologies-used)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Component Architecture](#component-architecture)
- [Responsive Design](#responsive-design)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Outcome](#outcome)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Objective

The primary objective of this project was to build a **real-world API integration application** that fetches, processes, and displays dynamic data from an external REST API, demonstrating:

- **Asynchronous JavaScript** — Working with the Fetch API, Promises, and `async/await` to handle HTTP requests and responses.
- **API consumption patterns** — Sending GET requests, parsing JSON responses, handling HTTP status codes (200, 404), and managing error scenarios.
- **Stateful UI rendering** — Managing multiple state variables (`user`, `repos`, `loading`, `error`) to control conditional rendering of different application views.
- **Loading & error UX** — Implementing loading spinners with backdrop blur and dedicated error pages for graceful failure handling.
- **Modern UI design** — Creating a visually striking glassmorphism interface with backdrop blur effects and semi-transparent card backgrounds.

This project reinforces real-world skills in consuming third-party APIs, handling asynchronous data flow, and building responsive, production-quality user interfaces.

---

## Overview

**DevSearch** allows users to search for any GitHub account by username. When a valid username is submitted, the application fetches the user's profile data — including avatar, display name, bio, follower/following counts, public repository count, and location — and renders it in a sleek profile card. A scrollable list of the user's public repositories is displayed alongside, with each repository showing its name, description, primary programming language, star count, last update timestamp, and a direct link to GitHub.

The entire experience is wrapped in a full-screen dark background with a cinematic overlay, giving the application a premium, developer-tool aesthetic.

---

## Features

- **Real-time GitHub user search** — Search any GitHub user by username using the GitHub REST API (no authentication required).
- **Complete profile display** — Avatar image, display name, username (`@handle`), and bio rendered in a glassmorphism card.
- **Statistics dashboard** — 2×2 grid displaying followers, following, public repositories, and location.
- **Repository listing** — Scrollable list of public repositories with name, description, primary language, star count, last updated date, and a direct GitHub link.
- **Loading state** — Full-screen spinner overlay with backdrop blur and animated loading indicator with "Fetching user data..." message.
- **Error handling** — Dedicated `ErrorPage` component displayed for invalid usernames, non-existent accounts, and network failures.
- **App reset** — Logo click resets the entire application state, returning to the initial search view.
- **Glassmorphism UI** — Semi-transparent backgrounds with `backdrop-blur-xl`, subtle borders, and layered card effects.
- **Fully responsive layout** — Optimized for mobile, tablet, and desktop viewports with a mobile-first approach.

---

## Steps Performed

### 1. Project Setup & Configuration
- Initialized the React project using **Vite 8** with the `@vitejs/plugin-react` plugin for fast HMR development.
- Installed dependencies: `react@19`, `react-dom@19`, `tailwindcss@4`, `lucide-react`, and configured ESLint for code quality.
- Set up the `@tailwindcss/vite` plugin for zero-config Tailwind CSS integration.

### 2. API Research & Integration Design
- Studied the **GitHub REST API** documentation to identify relevant endpoints:
  - `GET /users/{username}` — Fetches profile data for a given user.
  - `GET /users/{username}/repos` — Fetches the list of public repositories.
- Designed the data flow: user input → API request → response parsing → state update → conditional UI rendering.
- Accounted for rate limiting (60 requests/hour for unauthenticated requests).

### 3. State Management Architecture
- Implemented five state variables in the root `App` component using `useState`:
  - `username` — Controlled input value for the search field.
  - `user` — Parsed profile data object from the API response.
  - `repos` — Array of public repository objects.
  - `loading` — Boolean flag controlling the loading overlay.
  - `error` — Error message string triggering the error page.
- Created a `fetchUser` async function with nested `try/catch` blocks for sequential API calls.
- Built a `resetApp` function to clear all state and return to the initial view.

### 4. Component Development
- Decomposed the UI into eight focused components:
  - `App` — Root component managing global state, API calls, and conditional rendering.
  - `Content` — Wrapper applying the dark overlay background and rendering the Navbar.
  - `Navbar` — Top navigation bar with "DevSearch" branding, search bar, and GitHub link.
  - `Searchbar` — Controlled input with form submission triggering the user search.
  - `User` — Composite view assembling Profile, UserStats, and repository Card list.
  - `Profile` — Displays avatar, display name, username, and bio in a glassmorphism card.
  - `UserStats` — 2×2 statistics grid showing followers, following, public repos, and location.
  - `Card` — Individual repository card with name, description, language, stars, last update, and external link.
  - `ErrorPage` — Full-screen error overlay for invalid search results.

### 5. UI Design & Styling
- Designed a dark, cinematic aesthetic with a full-screen background image and gradient overlays.
- Implemented glassmorphism effects using `backdrop-blur-xl`, semi-transparent backgrounds (`bg-[#48484822]`), and subtle borders.
- Created custom CSS files (`data.css`, `navbar.css`) for component-specific responsive styles.
- Applied a loading state with `fixed inset-0`, `bg-black/40`, `backdrop-blur-sm`, and an animated spinning border.

### 6. Responsive Design Implementation
- Built with a **mobile-first approach** adapting across three breakpoints:
  - **Mobile** (< 480px): Compact navbar, reduced search bar, stacked layout.
  - **Tablet** (481px – 1023px): Centered content area (80% width), adjusted padding.
  - **Desktop** (≥ 1024px): Full-width navbar, centered content (60% width), expanded search.
- Used CSS media queries in `data.css` and `navbar.css` alongside Tailwind responsive utilities.

### 7. Error Handling & Edge Cases
- Handled HTTP 404 responses for non-existent usernames.
- Handled network errors with a generic "Something went wrong" message.
- Handled repository fetch failures independently with a specific error message.
- Input trimming and lowercasing for consistent API queries.

---

## Tools & Technologies Used

| Technology / Tool        | Role                                                                 |
| ------------------------ | -------------------------------------------------------------------- |
| **React 19**             | UI library for building the component-based, reactive interface      |
| **Vite 8**               | Modern build tool and development server with Hot Module Replacement  |
| **Tailwind CSS 4**       | Utility-first CSS framework for rapid, responsive styling            |
| **Lucide React**         | Icon library providing search, link, and navigation icons            |
| **GitHub REST API**      | External data source for user profiles and repository information    |
| **Fetch API**            | Native browser API for making asynchronous HTTP requests             |
| **JavaScript (ES6+)**    | Core language with async/await, destructuring, template literals     |
| **HTML5**                | Semantic markup for application structure                            |
| **CSS3**                 | Custom styles for glassmorphism effects and responsive layouts       |
| **ESLint**               | Static analysis tool for code quality and linting                    |
| **Git & GitHub**         | Version control and repository hosting                               |
| **VS Code**              | Primary code editor and development environment                      |

---

## Project Structure

```text
synent-task6-API_integration-naitik/
├── public/
│   ├── favicon.svg                 # Browser tab icon
│   └── icons.svg                   # SVG sprite for UI icons
├── src/
│   ├── assets/
│   │   ├── github.webp             # GitHub logo for branding
│   │   ├── hero.png                # Hero section imagery
│   │   └── main-back.jpg           # Full-screen background image
│   ├── components/
│   │   ├── Card.jsx                # Individual repository card component
│   │   ├── Content.jsx             # Main content wrapper with dark overlay
│   │   ├── Navbar.jsx              # Top navigation bar with branding and search
│   │   ├── Profile.jsx             # User profile section (avatar, name, bio)
│   │   ├── Searchbar.jsx           # Search input with form submission
│   │   ├── User.jsx                # Composite user view (profile + stats + repos)
│   │   ├── UserStats.jsx           # Statistics grid (followers, following, etc.)
│   │   ├── data.css                # Responsive styles for user data components
│   │   └── navbar.css              # Responsive styles for navigation and search
│   ├── App.jsx                     # Root component with state management and API logic
│   ├── App.css                     # Application-level styles
│   ├── ErrorPage.jsx               # Error display for invalid searches
│   ├── index.css                   # Global base styles and Tailwind directives
│   └── main.jsx                    # React DOM entry point
├── index.html                      # HTML template
├── package.json                    # Dependencies and npm scripts
├── vite.config.js                  # Vite build configuration
├── eslint.config.js                # ESLint configuration
└── README.md
```

---

## API Integration

The application communicates with two **GitHub REST API** endpoints. No API key or authentication token is required for basic usage.

### Endpoints Used

| Endpoint                                         | Method | Description                              |
| ------------------------------------------------ | ------ | ---------------------------------------- |
| `https://api.github.com/users/{username}`        | GET    | Fetches profile data for a given user    |
| `https://api.github.com/users/{username}/repos`  | GET    | Fetches the list of public repositories  |

### Data Flow

1. The user types a GitHub username into the search bar and submits the form.
2. The `fetchUser` async function in `App.jsx` trims and lowercases the input, then sends a GET request to the user endpoint.
3. If the user exists (HTTP 200), a second request fetches their repositories.
4. On success, the `user` and `repos` state variables are populated and the UI renders the profile view.
5. If the user is not found (HTTP 404) or any network error occurs, the error state is set and `ErrorPage` is rendered.

### Rate Limiting

The GitHub REST API enforces a rate limit of **60 requests per hour** for unauthenticated requests. If you encounter rate limiting during development, wait for the limit to reset or configure a personal access token in the request headers.

---

## Component Architecture

```text
App
├── Content
│   └── Navbar
│       └── Searchbar
├── Loading Overlay          (conditional: rendered when loading is true)
├── ErrorPage                (conditional: rendered when error state is set)
└── User                     (conditional: rendered on successful search)
    ├── Profile
    ├── UserStats
    └── Card                 (mapped for each repository)
```

### Component Descriptions

| Component    | Responsibility                                                                 |
| ------------ | ------------------------------------------------------------------------------ |
| `App`        | Root component managing global state (`user`, `repos`, `loading`, `error`) and API calls. |
| `Content`    | Wrapper applying the dark overlay background and rendering the Navbar.          |
| `Navbar`     | Top navigation with "DevSearch" branding, the search bar, and a GitHub link. Logo click triggers `resetApp`. |
| `Searchbar`  | Controlled input with a submit button that triggers the `fetchUser` function.  |
| `User`       | Composite view assembling Profile, UserStats, and the repository Card list.    |
| `Profile`    | Displays the user's avatar, display name, username, and bio in a glassmorphism card. |
| `UserStats`  | 2×2 grid showing followers, following, public repos, and location.             |
| `Card`       | Individual repository card with name, description, language, stars, last update, and external link. |
| `ErrorPage`  | Full-screen error overlay displayed when a searched username does not exist.    |

---

## Responsive Design

The application is built with a **mobile-first approach** and adapts across three primary breakpoints:

| Breakpoint       | Viewport Width   | Layout Adjustments                                              |
| ---------------- | ---------------- | --------------------------------------------------------------- |
| Mobile           | < 480px          | Compact navbar, reduced search bar width, stacked layout        |
| Tablet           | 481px – 1023px   | Centered content area (80% width), adjusted padding             |
| Desktop          | ≥ 1024px         | Full-width navbar, centered content area (60% width), expanded search bar |

---

## Setup & Installation

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/synent-task6-API_integration-naitik.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd synent-task6-API_integration-naitik
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will start on `http://localhost:5173` (default Vite port). The development server supports Hot Module Replacement (HMR) for instant feedback.

### Build for Production

```bash
npm run build
```

The optimized output will be generated in the `dist/` directory. To preview the production build locally:

```bash
npm run preview
```

---

## Usage

1. **Search** — Enter a GitHub username in the search bar and press Enter or click the search button.
2. **View profile** — The user's avatar, name, bio, and statistics are displayed in the profile card.
3. **Browse repositories** — Scroll through the list of public repositories, each showing language, stars, and last update.
4. **Visit repository** — Click the link icon on any repository card to open it directly on GitHub.
5. **Reset** — Click the "DevSearch" logo to clear the search and return to the initial view.

---

## Outcome

### Final Result
A fully functional, production-quality **GitHub User Finder** application that demonstrates proficiency in REST API integration, asynchronous JavaScript, and modern front-end development with React.

### Key Achievements
- **Seamless API integration** — Real-time data fetching from two GitHub REST API endpoints with proper error handling for 404 responses and network failures.
- **Multi-state conditional rendering** — Four distinct UI states (initial, loading, success, error) managed through React state, providing a smooth and predictable user experience.
- **Glassmorphism design system** — A visually striking dark-themed UI with backdrop blur effects, semi-transparent card backgrounds, and layered visual depth.
- **Responsive across all devices** — Mobile-first design adapting gracefully across three breakpoints with custom CSS media queries and Tailwind responsive utilities.
- **Robust error handling** — Graceful degradation for non-existent users, network failures, and API rate limiting, with clear user-facing error messages.
- **Clean component architecture** — Nine focused, single-responsibility components with clear data flow through props.

### Skills Demonstrated
- Asynchronous JavaScript with `async/await` and the Fetch API
- REST API consumption and HTTP status code handling
- React state management with multiple `useState` hooks
- Conditional rendering based on application state
- Responsive CSS with media queries and Tailwind utilities
- Glassmorphism UI design with backdrop blur and transparency
- Error handling and edge case management

---

## Future Enhancements

- GitHub authentication for higher API rate limits (5,000 requests/hour)
- Repository search and filtering by language, stars, or date
- User comparison feature (side-by-side profile comparison)
- Pagination for users with many repositories
- Dark/light theme toggle
- Repository statistics charts and visualizations
- Bookmark/favorite users for quick access

---

## License

This project was developed by **Naitik Patel** as part of the **Synent Technology Internship Program**. All rights reserved.
