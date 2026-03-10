# Lotto Number Generator Blueprint

## Overview
A simple and visually appealing web application that generates 6 unique random numbers between 1 and 45.

## Project Details
- **Tech Stack:** HTML5, CSS3 (Modern Baseline), Vanilla JavaScript (ES Modules).
- **Design Philosophy:** Clean, responsive, and user-friendly with support for both Light and Dark themes.
- **Key Features:**
    - Unique number generation (1-45).
    - Responsive layout.
    - Theme switching (Light/Dark mode) with persistent storage.
    - Interactive UI elements with polished styles.

## Current Implementation Plan (Dark/Light Mode)
1.  **Refactor CSS:** Implement CSS variables for colors and create a `[data-theme="dark"]` selector to manage theme-specific styles.
2.  **Update HTML:** Add a theme toggle button to the header area.
3.  **Implement JS Logic:**
    - Detect system theme preferences.
    - Handle toggle button clicks.
    - Save the user's preference to `localStorage`.
    - Apply the theme attribute to the `html` element.
4.  **Enhance UI:** Add subtle animations and better visual styling for the lotto balls.
