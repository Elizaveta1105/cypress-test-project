import NavBarComponent from "../components/navBar";
import BasePage from "./basePage";

export default class HomePage extends BasePage {
    path = "/"

    navBar = new NavBarComponent()
    
    feedTabs = () => cy.get('[data-qa-id="feed-tabs"]')
}