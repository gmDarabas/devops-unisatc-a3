import { test, expect } from '@playwright/test';
//
test('Verifica login e acesso à collection Categoria', async ({ page }) => {
  await page.goto('http://localhost:1337/admin');
  await page.fill('input[name="email"]', 'admin@satc.edu.br');
  await page.fill('input[name="password"]', 'welcomeToStrapi123');
  await page.click('button[type="submit"]');
  await page.waitForURL('**/admin');

  await page.goto('http://localhost:1337/admin/content-manager');
  
  await page.click('text=Categoria');
  await expect(page).toHaveURL(/.*categoria/);
});
