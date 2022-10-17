const {test, expect} = require('@playwright/test')
const { HomePage } = require('../ontra_pages/homepage')

var homePage

test.beforeEach(async({page}) => {
    homePage = new HomePage (page)
    await page.goto('https://www.ontra.ai/')
})

test('validate home page menu', async({page}) => {
    await expect(homePage.heading).toBeVisible
    await expect(homePage.sales).toBeVisible
    await expect(homePage.logo).toHaveAttribute('href','https://www.ontra.ai')
    await expect(homePage.menu).toHaveText([
    'What We Do',
    'Customers',
    'Resources',
    'Legal Network',
    'Company'])
})

test('validate hover menus - what we do', async({page}) => {
    await homePage.openMenuFor("What We Do")
    await expect(page).toHaveURL('https://www.ontra.ai/solutions/')
})

test('validate hover menus - resources', async({page}) => {
    await homePage.openMenuFor("Resources")
    await expect(page).toHaveURL('https://www.ontra.ai/resource-library/')
})

test('validate hover menus - customers', async({page}) => {
    await homePage.openMenuFor("Customers")
    await expect(page).toHaveURL('https://www.ontra.ai/customer-stories/')
})

test('validate hover menus - legal network', async({page}) => {
    await homePage.openMenuFor("Legal Network")
    await expect(page).toHaveURL('https://www.ontra.ai/legal-network/')
})

test('validate hover menus - company', async({page}) => {
    await homePage.openMenuFor("Company")
    await expect(page).toHaveURL('https://www.ontra.ai/about-us/')
})
