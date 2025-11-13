import {test} from '@playwright/test';

test.describe('Sample Test Suite', () => {
    test('Sample Test Case', async ({ page }) => {  
        await page.goto('https://example.com');
        await page.screenshot({ path: 'example.png' });
    })
})

// test.describe('Sample2 Test Suite', () => {
//     test('Sample Test C22ase', async ({ page }) => {  
//         await page.goto('https://example.com');
//         await page.screenshot({ path: 'example.png' });
//     })
// })
