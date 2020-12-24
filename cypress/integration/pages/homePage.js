/// <reference types="cypress"/>
class HomePage {
    BASE_URL = "https://www.danhotels.co.il";

    navigateToBasePage() {
        cy.visit(this.BASE_URL); 
        return this;
    }

    getSighInButton() {
        return cy.get('#block-danhotel-main-menu-he a').contains('מועדון e-Dan');
    }

    getOurHotelsButton() {
        return cy.get('a.open-hotels-block');
    }

    getHotelsMenuItems() {
        return cy.get('li').parents('#block-footer-he')
    }
}

export default HomePage;