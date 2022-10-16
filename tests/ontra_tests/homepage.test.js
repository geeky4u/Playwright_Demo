const {test, expect} = require('@playwright/test')
const { HomePage } = require('../ontra_pages/homepage')

test.beforeEach(async({page}) => {
    await page.goto('https://www.ontra.ai/')
})


test('validate home page menu', async({page}) => {
    await expect(page.getByText('World-class contract automation and negotiation for private markets')).toBeVisible
    await expect(page.getByText('Call Sales 1-888-611-4415')).toBeVisible
    await expect(page.locator('.navbar-brand')).toHaveAttribute('href','https://www.ontra.ai')
    await expect(page.locator('div.navigation > ul > li > a')).toHaveText([
      'What We Do',
    'Customers',
    'Resources',
    'Legal Network',
    'Company'])
})

test('validate hover menus - what we do', async({page}) => {
    const homePage = new HomePage (page)
    await homePage.openMenuFor("What We Do")
    await page.locator('//p[contains(text(),\'See how Ontra can automate and optimize your contract\')]').waitFor(5000)
})

test('validate hover menus - resources', async({page}) => {
    const homePage = new HomePage (page)
    await homePage.openMenuFor("Resources")
    await page.locator('//h4[contains(text(),\'Events and Resources\')]').waitFor(5000)
})

test('validate hover menus - customers', async({page}) => {
    const homePage = new HomePage (page)
    await homePage.openMenuFor("Customers")
    await page.locator('//p[contains(text(),\'Discover how customers leverage Ontra’s Contract Automation & Intelligence solutions\')]').waitFor(5000)
})

test('validate hover menus - legal network', async({page}) => {
    const homePage = new HomePage (page)
    await homePage.openMenuFor("Legal Network")
    await page.locator('//p[contains(text(),\'Ontra empowers you to practice corporate law without the geographic and time constraints of a traditional law firm\')]').waitFor(5000)
})

test('validate hover menus - company', async({page}) => {
    const homePage = new HomePage (page)
    await homePage.openMenuFor("Company")
    await page.locator('//p[contains(text(),\'Our vision is to free our customers and lawyer partners to focus on what’s important to them\')]').waitFor(5000)
})