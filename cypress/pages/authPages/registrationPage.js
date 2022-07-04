import BaseAuthPage from "./baseAuthPage";
import { faker } from '@faker-js/faker';

export default class RegistrationPage extends BaseAuthPage {
    path = "/register"

    userName = faker.name.firstName()

    email = faker.internet.email()

    usernameField = () => cy.get('[placeholder="Username"]')

    emailField = () => cy.get('[placeholder="Email"]')

    signUpButton = () =>  cy.get(`button:contains('Sign up')`)
}