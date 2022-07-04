export default class BasePage {
    
    open() {
        cy.visit(this.path)
        return this
    }
}