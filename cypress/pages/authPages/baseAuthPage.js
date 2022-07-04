import BasePage from "../basePage";

export default class BaseAuthPage extends BasePage {

    passwordField = () => cy.get("[type='password']")
}