import { test } from '@playwright/test';

// Login
test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.goto('http://localhost:5173/signin');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('admin');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('admin');
  await page.getByRole('button', { name: 'SIGN IN' }).click();
});