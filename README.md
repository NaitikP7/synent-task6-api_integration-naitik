# DevSearch -- GitHub User Finder

A modern, responsive web application that integrates with the GitHub REST API to search for GitHub users and display their profile information along with public repositories. Built as **Task 6 (API Integration)** for the Synent Technology internship program.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [API Integration](#api-integration)
- [Component Architecture](#component-architecture)
- [Responsive Design](#responsive-design)
- [License](#license)

---

## Overview

DevSearch is a single-page application that allows users to search for any GitHub account by username. Upon a successful search, the application fetches and presents the user's profile data -- including avatar, bio, follower/following counts, public repository count, and location -- alongside a scrollable list of their public repositories with details such as language, star count, and last update timestamp.

---

## Features

- **Real-time GitHub user search** via the GitHub REST API (no authentication required).
- **User profile display** including avatar, name, username, and bio.
- **Statistics dashboard** showing followers, following, public repositories, and location.
- **Repository listing** with name, description, primary language, star count, last updated date, and direct link to the repository.
- **Loading state** with a full-screen spinner overlay and backdrop blur.
- **Error handling** with a dedicated error page for invalid or non-existent usernames.
- **Glassmorphism UI** with backdrop blur effects and semi-transparent card backgrounds.
- **Fully responsive layout** optimized for mobile, tablet, and desktop viewports.

---

## Tech Stack

| Technology       | Purpose                                |
| ---------------- | -------------------------------------- |
| React 19         | UI component library                   |
| Vite 8           | Build tool and development server      |
| Tailwind CSS 4   | Utility-first CSS framework            |
| Lucide React     | Icon library                           |
| GitHub REST API  | Data source for user and repo info     |
| ESLint           | Code quality and linting               |

---

## Project Structure

```
synent-task6-API_integration-naitik/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── github.webp
│   │   ├── hero.png
│   │   └── main-back.jpg
│   ├── components/
│   │   ├── Card.jsx            # Individual repository card
│   │   ├── Content.jsx         # Main content wrapper
│   │   ├── Navbar.jsx          # Top navigation bar with branding and search
│   │   ├── Profile.jsx         # User profile section (avatar, name, bio)
│   │   ├── Searchbar.jsx       # Search input with submit action
│   │   ├── User.jsx            # Full user view (profile + stats + repos)
│   │   ├── UserStats.jsx       # Statistics grid (followers, following, etc.)
│   │   ├── data.css            # Styles for user data components
│   │   └── navbar.css          # Styles for navigation and search bar
│   ├── App.jsx                 # Root component with state management and API calls
│   ├── App.css                 # Application-level styles
│   ├── ErrorPage.jsx           # Error display for invalid searches
│   ├── index.css               # Global base styles
│   └── main.jsx                # Application entry point
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/synent-task6-API_integration-naitik.git
   cd synent-task6-API_integration-naitik
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5173` (default Vite port). The development server supports Hot Module Replacement (HMR) for instant feedback during development.

### Building for Production

```bash
npm run build
```

The optimized output will be generated in the `dist/` directory. To preview the production build locally:

```bash
npm run preview
```

---

## API Integration

The application communicates with two GitHub REST API endpoints. No API key or authentication token is required.

### Endpoints Used

| Endpoint                                         | Method | Description                              |
| ------------------------------------------------ | ------ | ---------------------------------------- |
| `https://api.github.com/users/{username}`        | GET    | Fetches profile data for a given user    |
| `https://api.github.com/users/{username}/repos`  | GET    | Fetches the list of public repositories  |

### Data Flow

1. The user types a GitHub username into the search bar and submits.
2. The `fetchUser` function in `App.jsx` sends a GET request to the user endpoint.
3. If the user exists (status 200), a second request fetches their repositories.
4. On success, the `user` and `repos` state variables are populated and the UI renders the profile view.
5. If the user is not found (status 404) or any network error occurs, the error state is set and `ErrorPage` is rendered.

### Rate Limiting

The GitHub REST API enforces a rate limit of **60 requests per hour** for unauthenticated requests. If you encounter rate limiting during development, wait for the limit to reset or configure a personal access token.

---

## Component Architecture

```
App
├── Content
│   └── Navbar
│       └── Searchbar
├── ErrorPage          (conditional: rendered on error)
└── User               (conditional: rendered on successful search)
    ├── Profile
    ├── UserStats
    └── Card           (mapped for each repository)
```

### Component Descriptions

| Component    | Responsibility                                                                 |
| ------------ | ------------------------------------------------------------------------------ |
| `App`        | Root component. Manages global state (user, repos, loading, error) and API calls. |
| `Content`    | Wrapper that applies the dark overlay background and renders the Navbar.       |
| `Navbar`     | Top navigation bar containing branding ("DevSearch"), the search bar, and a GitHub link. |
| `Searchbar`  | Controlled input field with a submit button that triggers the user search.     |
| `User`       | Composite view assembling Profile, UserStats, and the repository Card list.    |
| `Profile`    | Displays the user's avatar, display name, username, and bio.                   |
| `UserStats`  | 2x2 grid showing followers, following, public repos, and location.             |
| `Card`       | Individual repository card showing name, description, language, stars, last update, and an external link. |
| `ErrorPage`  | Full-screen error overlay displayed when a searched username does not exist.    |

---

## Responsive Design

The application is designed with a mobile-first approach and adapts across three primary breakpoints:

| Breakpoint       | Viewport Width   | Layout Adjustments                                              |
| ---------------- | ---------------- | --------------------------------------------------------------- |
| Mobile           | < 480px          | Compact navbar, reduced search bar width, stacked layout        |
| Tablet           | 481px -- 1023px  | Centered content area (80% width), adjusted padding             |
| Desktop          | >= 1024px        | Full-width navbar, centered content area (60% width), expanded search bar |

---

## License

This project was developed as part of the Synent Technology internship program. All rights reserved.
