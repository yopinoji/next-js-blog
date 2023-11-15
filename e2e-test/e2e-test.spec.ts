import { test, expect } from '@playwright/test'

test('Snapshot index page', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveScreenshot({ fullPage: true })
})

test('Should navigate to the "Testing blog article" page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')
  // Find an element with the text 'About Page' and click on it
  await page.getByText('Testing blog article').click()
  // The new url should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('/blog/test-article')
  // The new page should contain an h1 with "About Page"
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Testing blog article')
})
