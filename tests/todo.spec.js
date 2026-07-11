import { test, expect } from '@playwright/test';

test('test to-do app @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').fill('Learn Selenium');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Go to work');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Do yoga');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Have dinner');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Sleep');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Learn Selenium' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Do yoga' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByText('Have dinner')).toBeVisible();

  await expect(page.getByTestId('todo-list')).toContainText('Sleep');
  await expect(page.getByTestId('todo-list')).toContainText('Go to work');

  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  
  await expect(page.locator('.todo-list li')).toHaveCount(3);
  
});
