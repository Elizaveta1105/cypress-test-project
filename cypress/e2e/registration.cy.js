import RegistrationPage from "../pages/authPages/registrationPage"
import HomePage  from "../pages/homePage"
import userData from "../fixtures/userData.json"

describe('Registration tests', () => {
  const registrationPage = new RegistrationPage()
  const homePage = new HomePage()

  it('User should register with valid creds', () => {
    registrationPage.open()
    registrationPage.usernameField().type(registrationPage.userName)
    registrationPage.emailField().type(registrationPage.email)
    registrationPage.passwordField().type(userData.password)

    registrationPage.signUpButton().click()
    homePage.feedTabs().should('be.visible')
    cy.url().then(url => {
      expect(url).to.eq(Cypress.env('homePageUrl'))
    })
    homePage.navBar.navBarButtons().should('contain', registrationPage.userName.toLowerCase())
  })
})