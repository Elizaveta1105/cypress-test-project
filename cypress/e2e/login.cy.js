import LoginPage from "../pages/authPages/loginPage"
import HomePage from "../pages/homePage"
import loginData from "../fixtures/loginData.json"
import userData from "../fixtures/userData.json"

describe('Login tests', () => {
  const loginPage = new LoginPage()
  const homePage = new HomePage()

  it('User should login with valid email and password', () => {
    loginPage.open()
    loginPage.emailField().type(userData.email)
    loginPage.passwordField().type(userData.password)
    loginPage.signInButton().click()
    homePage.feedTabs().should('be.visible')
    cy.url().then(url => {
      expect(url).to.eq(Cypress.env('homePageUrl'))
    })
    homePage.navBar.navBarButtons().should('contain', userData.userName)
  })

  loginData.loginError.forEach(login => {
    it(`User should not login with ${login.kind}`, () => {
      loginPage.open()
      loginPage.emailField().type(login.email)
      loginPage.passwordField().type(login.password)
      loginPage.signInButton().click()
      cy.contains(loginData.errorText) 
    })
  })
  
})