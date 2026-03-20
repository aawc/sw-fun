document.addEventListener('DOMContentLoaded', () => {
    const quoteContainer = document.getElementById('quote-text');
    const platformInfo = document.getElementById('platform-info');

    // Quotes for Platform + Service Worker Status
    const quotes = {
        desktop_no_sw: "All animals are equal, but some animals are more equal than others.",
        desktop_sw: "Four legs good, two legs bad.",
        android_no_sw: "The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.",
        android_sw: "Man is the only creature that consumes without producing."
    };

    // Colors for Platform + Service Worker Status
    const colors = {
        desktop_no_sw: "#e3f2fd", // Light Blue
        desktop_sw: "#e8f5e9",     // Light Green
        android_no_sw: "#fff3e0", // Light Orange
        android_sw: "#f3e5f5"      // Light Purple
    };

    const isAndroid = /Android/i.test(navigator.userAgent);

    function updateUI() {
        // A Service Worker is 'active' if it is controlling the current page
        const swActive = !!navigator.serviceWorker.controller;
        let currentState = '';
        let currentStatus = swActive ? 'Active' : 'Not Running';
        let currentPlatform = isAndroid ? 'Android' : 'Desktop';

        if (isAndroid) {
            currentState = swActive ? 'android_sw' : 'android_no_sw';
        } else {
            currentState = swActive ? 'desktop_sw' : 'desktop_no_sw';
        }

        // Set the detected quote, info text, and background color
        quoteContainer.textContent = `"${quotes[currentState]}"`;
        platformInfo.textContent = `Detected Platform: ${currentPlatform} | Service Worker: ${currentStatus}`;
        document.body.style.backgroundColor = colors[currentState];
    }

    // Register Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
            
            // Listen for when the service worker takes control (via clients.claim in SW)
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                console.log('Service Worker controller changed');
                updateUI();
            });
        });
    }

    // Initial check
    updateUI();
});
