document.addEventListener('DOMContentLoaded', () => {
    const quoteContainer = document.getElementById('quote-text');
    const platformInfo = document.getElementById('platform-info');

    // Quotes as outlined in the plan
    const quotes = {
        desktop_browser: "All animals are equal, but some animals are more equal than others.",
        desktop_pwa: "Four legs good, two legs bad.",
        android_browser: "The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.",
        android_pwa: "Man is the only creature that consumes without producing."
    };

    // Detect Platform (Simple regex check for Android in userAgent)
    const isAndroid = /Android/i.test(navigator.userAgent);
    
    // Detect Display Mode
    // We check if it is running standalone via matchMedia or navigator.standalone (for iOS occasionally)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;

    let currentState = '';
    let currentPlatform = '';
    let currentMode = '';

    if (isAndroid) {
        currentPlatform = 'Android';
        if (isStandalone) {
            currentState = 'android_pwa';
            currentMode = 'PWA (Standalone)';
        } else {
            currentState = 'android_browser';
            currentMode = 'Browser';
        }
    } else {
        currentPlatform = 'Desktop';
        if (isStandalone) {
            currentState = 'desktop_pwa';
            currentMode = 'PWA (Standalone)';
        } else {
            currentState = 'desktop_browser';
            currentMode = 'Browser';
        }
    }

    // Set the detected quote and info text
    quoteContainer.textContent = `"${quotes[currentState]}"`;
    platformInfo.textContent = `Detected Platform: ${currentPlatform} | Detected Mode: ${currentMode}`;

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

    // Optional: listen to display-mode changes to update dynamically if needed
    window.matchMedia('(display-mode: standalone)').addEventListener('change', (evt) => {
        let isNowStandalone = evt.matches;
        let newState = isAndroid ? (isNowStandalone ? 'android_pwa' : 'android_browser') : (isNowStandalone ? 'desktop_pwa' : 'desktop_browser');
        let newMode = isNowStandalone ? 'PWA (Standalone)' : 'Browser';
        
        quoteContainer.textContent = `"${quotes[newState]}"`;
        platformInfo.textContent = `Detected Platform: ${currentPlatform} | Detected Mode: ${newMode}`;
    });
});
