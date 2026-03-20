document.addEventListener('DOMContentLoaded', () => {
    const quoteContainer = document.getElementById('quote-text');
    const platformInfo = document.getElementById('platform-info');

    // Quotes and colors for each mode
    const quotes = {
        desktop_browser: "All animals are equal, but some animals are more equal than others.",
        desktop_pwa: "Four legs good, two legs bad.",
        android_browser: "The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.",
        android_pwa: "Man is the only creature that consumes without producing."
    };

    const colors = {
        desktop_browser: "#e3f2fd", // Light Blue
        desktop_pwa: "#e8f5e9",     // Light Green
        android_browser: "#fff3e0", // Light Orange
        android_pwa: "#f3e5f5"      // Light Purple
    };

    // Detect Platform (Simple regex check for Android in userAgent)
    const isAndroid = /Android/i.test(navigator.userAgent);
    
    // Detect Display Mode
    // We check if it is running standalone via matchMedia or navigator.standalone (for iOS occasionally)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;

    function updateUI(standalone) {
        let currentState = '';
        let currentMode = standalone ? 'PWA (Standalone)' : 'Browser';
        let currentPlatform = isAndroid ? 'Android' : 'Desktop';

        if (isAndroid) {
            currentState = standalone ? 'android_pwa' : 'android_browser';
        } else {
            currentState = standalone ? 'desktop_pwa' : 'desktop_browser';
        }

        // Set the detected quote, info text, and background color
        quoteContainer.textContent = `"${quotes[currentState]}"`;
        platformInfo.textContent = `Detected Platform: ${currentPlatform} | Detected Mode: ${currentMode}`;
        document.body.style.backgroundColor = colors[currentState];
    }

    // Initial UI update
    updateUI(isStandalone);

    // Register Service Worker for PWA functionality
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }

    // Listen to display-mode changes to update dynamically
    window.matchMedia('(display-mode: standalone)').addEventListener('change', (evt) => {
        updateUI(evt.matches);
    });
});
