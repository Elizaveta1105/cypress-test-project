import BaseAuthPage from "./baseAuthPage";

export default class LoginPage extends BaseAuthPage {
    path = "/login"

    emailField = () => cy.get('[type="email"]')

    signInButton = () => cy.get(`button:contains('Sign in')`)

}