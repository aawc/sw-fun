# Animal Farm PWA Prototype

A lightweight, static Progressive Web App (PWA) that demonstrates platform and display-mode detection using Service Workers and Web APIs.

## Features

-   **Context-Aware Content:** Displays different quotes from George Orwell's *Animal Farm* based on the environment.
-   **Visual Indicators:** Changes the background color for each of the 4 detection states:
    -   **Desktop Browser:** Light Blue
    -   **Desktop PWA:** Light Green
    -   **Android Browser:** Light Orange
    -   **Android PWA:** Light Purple
-   **Offline Support:** Uses a Service Worker to cache assets for offline access.
-   **PWA Ready:** Includes a web manifest for installation as a standalone app.
-   **Subpath Compatible:** Designed for deployment to GitHub Pages (at `/sw-fun/`).

## Project Structure

-   `index.html`: Main entry point and UI structure.
-   `style.css`: Minimalist, responsive styling.
-   `app.js`: Core logic for platform/mode detection and Service Worker registration.
-   `sw.js`: Service Worker implementing a cache-first strategy.
-   `manifest.json`: Web App Manifest for PWA installation.
-   `icons/`: Scalable SVG icons for the app.

## How to Reproduce

Want to build something like this yourself? Check out the **[PROMPT.md](./PROMPT.md)** file for the AI prompt used to generate this project.

## Local Testing

To test the PWA features locally, serve the files using a local server (e.g., `python3 -m http.server`) and use Chrome DevTools:
1.  **Application Tab:** Verify the Service Worker is registered and the Manifest is loaded.
2.  **Device Toolbar:** Toggle between "Desktop" and "Mobile" (Android) to see the quotes change.
3.  **Standalone Simulation:** You can manually override the display mode in DevTools to simulate the PWA experience.
