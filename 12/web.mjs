/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-extraneous-dependencies */
import playwright from "playwright";

(async () => {
  const browser = await playwright.chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://www.melon.com/chart/index.htm");
  //
  // 모든 .link_txt 요소를 가져옵니다.
  const linkTexts = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".rank01")).map(
      (link) => link.innerText
    );
  });

  // 링크 텍스트를 콘솔에 인쇄합니다.
  for (const linkText of linkTexts) {
    console.log(linkText);
  }

  await browser.close();
})();
