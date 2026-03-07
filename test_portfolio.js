const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        page.on('console', msg => console.log('PAGE LOG:', msg.text()));
        page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
        page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

        await page.goto('http://localhost:8000/portfolio.html', { waitUntil: 'networkidle0' });

        console.log("Checking scrollHeight...");
        let scrollHeight = await page.evaluate(() => document.body.scrollHeight);
        let innerHeight = await page.evaluate(() => window.innerHeight);
        console.log("scrollHeight: " + scrollHeight + ", innerHeight: " + innerHeight);

        console.log("Page loaded. Clicking a project card...");

        await page.evaluate(() => {
            const firstCard = document.querySelector('.portfolio-item');
            if (firstCard) {
                firstCard.click();
            } else {
                console.log("No portfolio item found!");
            }
        });

        await new Promise(r => setTimeout(r, 500));

        let modalActive = await page.evaluate(() => {
            const overlay = document.getElementById('projectModalOverlay');
            return overlay ? overlay.classList.contains('active') : false;
        });
        console.log("Modal active after click:", modalActive);

        // Find if body has overflow: hidden
        let bodyOverflow = await page.evaluate(() => document.body.style.overflow);
        console.log("Body overflow style:", bodyOverflow);

        await browser.close();
    } catch (e) {
        console.log("Script error:", e);
    }
})();
