import { test, expect } from '@playwright/test';

test('translate singlish to sinhala', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  
  await page.locator('textarea').fill('mama adha asaniipa velaa . ee nisaa  mata paasal enna venne naee . oyaata maagee mithuriyata mee potha dhenna .puPavanDHA eyaata kiyanna mama asaniipa velaa kiyala ');

  // Wait for real-time translation
  await page.waitForTimeout(2000);

  // Get translated output (same textarea updates)
  const output = await page.locator('textarea').inputValue();

});