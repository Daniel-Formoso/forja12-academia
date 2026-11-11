import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
});

const page = await browser.newPage({
  viewport: { width: 430, height: 932 },
  deviceScaleFactor: 1,
  isMobile: true,
});

await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.emulateMedia({ reducedMotion: "reduce" });
await page.addStyleTag({
  content: `
    nextjs-portal,
    a[title="Sobre o protótipo"] {
      display: none !important;
    }
  `,
});
await page.screenshot({
  path: "public/assets/site-mobile-long.png",
  fullPage: true,
});

await browser.close();
