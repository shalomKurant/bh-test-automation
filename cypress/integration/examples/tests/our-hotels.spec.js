/// <reference types="cypress"/>
import OurHotels from "../../pages/ourHotels"; 

describe('Our hotels', () => {
    let ourHotels;
    before(() => {
        ourHotels = new OurHotels();
    });

    beforeEach(() => {
        ourHotels.goToOurHotelsPage();
    });

    it('Navigate to our hotels page', () => {
        ourHotels.getTitle().should('have.text', 'מלונות בישראל');
    });

    it('Show all hotels card packages', () => {
        ourHotels.getHotelCardsPackages()
        .should(($div) => {
            expect($div).to.have.length.of.at.least(10);
        });
    })
});