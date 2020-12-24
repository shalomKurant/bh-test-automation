/// <reference types="cypress"/>
import HomePage from "../../pages/homePage"; 

describe('Home page', () => {
    let homePage;
    before(() => {
        homePage = new HomePage();
    });

    it('Open the home page', () => {
        homePage.navigateToBasePage()
        cy.title().should('eq', 'מלונות דן | רשת מלונות היוקרה של ישראל');
    });

    it('Should show hotels menu in home page', () => {
        homePage.getHotelsMenuItems().should('exist');
    });
});