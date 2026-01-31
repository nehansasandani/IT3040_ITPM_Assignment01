import { test, expect } from '@playwright/test';

test('Neg_Fun5 – Input should NOT produce the exact expected translation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Your input (negative scenario)
  await page.locator('textarea').first().fill('machan oya monawada karanne?.');

  // Wait for translation
  await page.waitForTimeout(2000);

  // Read output textarea
  const output = await page.locator('textarea').nth(1).inputValue();

  // Negative assertion: output should NOT be this exact "wrong" text
  expect(output).not.toBe('මචන් ඔය මොනwඅඩ කරන්නේ?');
});
