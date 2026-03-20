# Animal Farm SW Detection Prototype

A lightweight, static website that demonstrates platform and Service Worker status detection.

## Features

-   **Context-Aware Content:** Displays different quotes from George Orwell's *Animal Farm* based on the environment.
-   **Visual Indicators:** Changes the background color for each of the 4 detection states:
    -   **Desktop + No SW:** Light Blue
    -   **Desktop + SW Active:** Light Green
    -   **Android + No SW:** Light Orange
    -   **Android + SW Active:** Light Purple
-   **Offline Support:** Uses a Service Worker to cache assets for offline access.
-   **Immediate Control:** The Service Worker uses `clients.claim()` to take control of the page immediately after activation, triggering a UI update.
-   **Subpath Compatible:** Designed for deployment to GitHub Pages (at `/sw-fun/`).

## Project Structure

-   `index.html`: Main entry point and UI structure.
-   `style.css`: Minimalist, responsive styling.
-   `app.js`: Core logic for platform/SW detection and registration.
-   `sw.js`: Service Worker implementing a cache-first strategy and `clients.claim()`.
-   `manifest.json`: Web App Manifest for PWA installation.
-   `icons/`: Scalable SVG icons for the app.

## How to Reproduce

Want to build something like this yourself? Check out the **[PROMPT.md](./PROMPT.md)** file for the AI prompt used to generate this project.

## Local Testing

To test the Service Worker features locally, serve the files using a local server (e.g., `npx serve .` or `python3 -m http.server`) and use Chrome DevTools:
1.  **Initial Load:** The site will load with the "Not Running" quote and color.
2.  **SW Activation:** After the Service Worker installs and activates, the page will dynamically change color and quote (thanks to the `controllerchange` listener).
3.  **Device Toolbar:** Toggle between "Desktop" and "Mobile" (Android) to see the quotes change based on the platform.
