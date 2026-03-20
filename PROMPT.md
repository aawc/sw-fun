# The "Animal Farm SW Detection" Prompt

You can use the following prompt with an AI assistant to generate a similar website with platform and Service Worker status detection.

---

## The Prompt

"Build a prototype static website for a project called 'Animal Farm Quotes'. The primary goal is to use modern Web APIs to display different content (famous quotes from George Orwell's 'Animal Farm') depending on four specific states:
1.  **Desktop (Service Worker Not Running)**
2.  **Desktop (Service Worker Active)**
3.  **Android (Service Worker Not Running)**
4.  **Android (Service Worker Active)**

### Requirements:
1.  **Static Files Only:** The project must consist of only HTML, CSS, and vanilla JavaScript.
2.  **Service Worker Functionality:**
    - Implement a Service Worker (`sw.js`) with a cache-first strategy to ensure the app works offline.
    - Use `self.clients.claim()` in the `activate` event so the Service Worker takes control of the page immediately upon activation.
3.  **Detection Logic:**
    - In `app.js`, detect the platform (Android vs Desktop) using the User Agent.
    - Detect the Service Worker status using `navigator.serviceWorker.controller`.
    - Listen for the `controllerchange` event to update the UI when the Service Worker takes control.
4.  **Dynamic Content:**
    - Assign a unique quote and a unique background color to each of the four states so they are easily distinguishable.
5.  **Deployment Friendly:** Ensure all asset paths are relative (`./`) so the app can be deployed to a subpath like GitHub Pages (e.g., `/sw-fun/`).
6.  **UI Design:** Keep the design clean, responsive, and centered, with a prominent quote box."
