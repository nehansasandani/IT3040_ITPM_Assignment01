import { test, expect } from '@playwright/test';

test('Neg_Fun5 – Joined words are translated incorrectly', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Joined words (negative case)
  await page.locator('textarea').first().fill('mamagedharayanavaa');

  // Wait for translation
  await page.waitForTimeout(2000);

  // Read OUTPUT textarea
  const output = await page.locator('textarea').nth(1).inputValue();

  // Negative assertion
  expect(output).not.toContain('මම ගෙදර යනවා');
});
