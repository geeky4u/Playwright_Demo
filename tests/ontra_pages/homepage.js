const { expect } = require('@playwright/test')

exports.HomePage = class HomePage {

  constructor(page) {
    this.page = page
    this.whatWeDo = page.locator('a', { hasText: 'What We Do' })
    this.customers = page.locator('a', { hasText: 'Customers' })
    this.resources = page.locator('a', { hasText: 'Resources' })
    this.legalNetwork = page.locator('a', { hasText: 'Legal Network' })
    this.company = page.locator('a', { hasText: 'Company' })
    this.signIn = page.locator('a', { hasText: 'Sign in' })
    this.contactUs = page.locator('span', { hasText: 'Contact us' })
    this.howWeHelp = page.locator('h4', { hasText: 'HOW WE HELP' })
    this.heading = page.getByText('World-class contract automation and negotiation for private markets')
    this.sales = page.getByText('Call Sales 1-888-611-4415')
    this.logo = page.locator('.navbar-brand')
    this.menu = page.locator('div.navigation > ul > li > a')
  }

  async openMenuFor(navItem){
    console.log(navItem)
    switch (navItem) {
        case "What We Do":
            this.whatWeDo.first().click()
            break
        case "Resources":
            this.resources.first().click()
            break
        case "Legal Network":
            this.legalNetwork.first().click()
            break
        case "Customers":
            this.customers.first().click()
            break
        case "Company":
            this.company.first().click()
            break
    }
  }
}
