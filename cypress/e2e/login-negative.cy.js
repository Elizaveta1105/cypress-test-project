import LoginPage from "../pages/authPages/loginPage"
import loginData from "../fixtures/loginData.json"

describe('Login tests', () => {
  const loginPage = new LoginPage()

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