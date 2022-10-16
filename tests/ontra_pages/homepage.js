const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.whatWeDo = page.locator('a', { hasText: 'What We Do' });
    this.customers = page.locator('a', { hasText: 'Customers' });
    this.resources = page.locator('a', { hasText: 'Resources' });
    this.legalNetwork = page.locator('a', { hasText: 'Legal Network' });
    this.company = page.locator('a', { hasText: 'Company' });
    this.signIn = page.locator('a', { hasText: 'Sign in' });
    this.contactUs = page.locator('span', { hasText: 'Contact us' });
    this.howWeHelp = page.locator('h4', { hasText: 'HOW WE HELP' });
  }

  async openMenuFor(navItem){
    console.log(navItem)
    switch (navItem) {
        case "What We Do":
            this.whatWeDo.first().hover()
            break
        case "Resources":
            this.resources.first().hover()
            break
        case "Legal Network":
            this.legalNetwork.first().hover()
            break
        case "Customers":
            this.customers.first().hover()
            break
        case "Company":
            this.company.first().hover()
            break
    }
  }
}
