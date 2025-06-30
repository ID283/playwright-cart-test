const { test, expect } = require('@playwright/test');

test('Add 5 Carrots to cart by input', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  
  // Вводимо "ro" у поле пошуку
  await page.fill('.search-keyword', 'ro');
  await page.waitForTimeout(1000); // Чекаємо поки з’являться результати

  // Знаходимо "Carrot" за назвою
  const carrotCard = page.locator('.products .product:has-text("Carrot")');
  await expect(carrotCard).toBeVisible();

  // Встановлюємо кількість вручну через input
  await carrotCard.locator('input[type="number"]').fill('5');
  
  // Додаємо Carrot у корзину (перевіримо це пізніше)
  // Шукаємо гриб Mushroom
  // Пошук моркви (Carrot)
await page.fill('.search-keyword', 'ro');
await page.waitForTimeout(1000);


await expect(carrotCard).toBeVisible();

// Встановлюємо кількість 5 вручну
await carrotCard.locator('input[type="number"]').fill('5');

// Додаємо Carrot у кошик
await carrotCard.locator('button:has-text("ADD TO CART")').click();
  await page.fill('.search-keyword', 'mush');
  await page.waitForTimeout(1000);

  const mushroomCard = page.locator('.products .product:has-text("Mushroom")');
  await expect(mushroomCard).toBeVisible();

  // Натискаємо кнопку + тричі

  const plusButton = mushroomCard.locator('a.increment');
  await plusButton.click();
  await plusButton.click();
  await plusButton.click();

  // Додаємо гриб до кошика
  await mushroomCard.locator('text=ADD TO CART').click();

  // Переходимо до кошика
  await page.click('img[alt="Cart"]');
  await page.click('text=PROCEED TO CHECKOUT');

  // Видаляємо моркву (Carrot)
  const carrotRow = page.locator('tr:has-text("Carrot")');
  await carrotRow.locator('td button').click();

  await page.waitForTimeout(1000); // Пауза для візуального контролю

});