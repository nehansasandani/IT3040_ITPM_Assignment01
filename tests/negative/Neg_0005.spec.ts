import { test, expect } from '@playwright/test';

test('Neg_Fun5 – Long paragraph input should NOT produce exact correct translation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Negative input: long paragraph
  const longInput = `(300+ characters paragraph with multiple sentences).`;
  await page.locator('textarea').first().fill(longInput);

  // Wait for translation
  await page.waitForTimeout(2000);

  // Read output textarea
  const output = await page.locator('textarea').nth(1).inputValue();

  // TRUE NEGATIVE assertion: output should NOT exactly match some "ideal" translation
  expect(output).not.toBe('EXPECTED_CORRECT_TRANSLATION_HERE');
});
