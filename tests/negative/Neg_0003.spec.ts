import { test, expect } from '@playwright/test';

test('Neg_Fun5 – Input should NOT produce exact expected translation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Your input (negative scenario)
  await page.locator('textarea').first().fill('mama laptop eka restart kala.');

  // Wait for translation
  await page.waitForTimeout(2000);

  // Read output textarea
  const output = await page.locator('textarea').nth(1).inputValue();

  // Negative assertion: output should NOT be exactly this
  expect(output).not.toBe('මම laptop එක restart කල');
});
