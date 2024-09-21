window.addEventListener('DOMContentLoaded', (event) => {
    const currentUrl = window.location.href;

    // List of valid pages
    const validPages = [
        '/', '/commands', '/team', '/store', '/changelog', '/rules',
        // Add other valid pages here
    ];

    // Check if the current URL contains 'index.html'
    if (currentUrl.includes('index.html')) {
        const rootUrl = currentUrl.replace(/index\.html$/, '');
        window.location.replace(rootUrl);
    }
    // Check if the current URL ends with '.html'
    else if (currentUrl.endsWith('.html')) {
        const baseUrl = currentUrl.replace(/\.html$/, '');
        window.location.replace(baseUrl);
    }
    // Check if the current path is valid
    else {
        const path = new URL(currentUrl).pathname;
        if (!validPages.includes(path)) {
            // Redirect to the 404 page
            window.location.replace('/404.html');
        }
    }
});
