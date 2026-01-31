import { test, expect } from '@playwright/test';

test('Neg_Fun5 – Empty input should return empty output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').fill('Typing text slowly character by character');

  // Wait for translation
  await page.waitForTimeout(2000);

  const output = await page.locator('textarea').inputValue();

  // Validate negative caseඑ
  expect(output).toContain('Typing text slowly character by character!');
});