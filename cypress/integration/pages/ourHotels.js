import HomePage from "./homePage";

class OurHotels {
    homePage;
    constructor() {
        this.homePage = new HomePage();
    }

    goToOurHotelsPage() {
        this.homePage.navigateToBasePage()
        .getOurHotelsButton().click();
        return this;
    }

    getTitle() {
        return cy.get('.field-main-title h1');
    }

    getHotelCardsPackages() {
        return cy.get('.areaPackages .packagesGroup');
    }
}

export default OurHotels;