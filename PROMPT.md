# The "Animal Farm PWA" Prompt

You can use the following prompt with an AI assistant to generate a similar Progressive Web App (PWA) with platform and display-mode detection.

---

## The Prompt

"Build a prototype static website for a project called 'Animal Farm Quotes'. The primary goal is to use service workers and modern Web APIs to display different content (famous quotes from George Orwell's 'Animal Farm') depending on four specific states:
1.  **Desktop Browser**
2.  **Desktop PWA (Standalone Mode)**
3.  **Android Browser**
4.  **Android PWA (Standalone Mode)**

### Requirements:
1.  **Static Files Only:** The project must consist of only HTML, CSS, and vanilla JavaScript.
2.  **PWA Functionality:**
    - Include a `manifest.json` with a 'standalone' display mode and placeholder icons.
    - Implement a Service Worker (`sw.js`) with a cache-first strategy to ensure the app works offline.
3.  **Detection Logic:**
    - In `app.js`, detect the platform (Android vs Desktop) using the User Agent.
    - Detect the display mode (Browser vs Standalone) using `window.matchMedia('(display-mode: standalone)')`.
4.  **Dynamic Content:**
    - Assign a unique quote and a unique background color to each of the four states so they are easily distinguishable.
    - Update the UI dynamically if the display mode changes.
5.  **Deployment Friendly:** Ensure all asset paths are relative (`./`) so the app can be deployed to a subpath like GitHub Pages (e.g., `/sw-fun/`).
6.  **UI Design:** Keep the design clean, responsive, and centered, with a prominent quote box."
