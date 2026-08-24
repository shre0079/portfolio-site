/**
 * OG Image Generator
 *
 * This script uses Puppeteer to generate a perfect 1200x630px OG card image.
 *
 * Install: npm install puppeteer
 * Run: node generate-og-image.js
 */

const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    console.log('🎨 Generating OG card image...');

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set viewport to exact OG image dimensions
    await page.setViewport({
        width: 1200,
        height: 630,
        deviceScaleFactor: 2 // 2x for high-DPI displays
    });

    // Load the OG card HTML
    const htmlPath = 'file://' + path.resolve(__dirname, 'og-card.html');
    await page.goto(htmlPath, { waitUntil: 'networkidle0' });

    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');
    await page.waitForTimeout(500); // Extra wait for animations to settle

    // Take screenshot of just the card
    const card = await page.$('.og-card');
    await card.screenshot({
        path: 'og-image.png',
        omitBackground: false
    });

    console.log('✅ OG image generated: og-image.png');
    console.log('📏 Size: 1200x630px @ 2x resolution');

    await browser.close();
})();
