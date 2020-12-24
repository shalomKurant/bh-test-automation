/// <reference types="cypress"/>
import Registration from "../../pages/registration"; 

describe('Registration', () => {
    let registration;
    let errorMessage;
    before(() => {
        registration = new Registration();
        cy.fixture('data.json').then(data => {
            errorMessage = data.errorMessages;
        })
    });

    beforeEach(() => {
        registration.goToRegistrationPage()
    })

    it('Open the registration page', () => {
        registration.goToRegistrationPage()
        .getTitle().should('have.text', 'הצטרפו ל-e-Dan')
    });

    it('Perform a login process', () => {
        registration.signUp();
    });

    it('Show error when required Terms field is missing', () => {
        registration.inputDetailsWithMissingParams('terms')
        .getSubmitButton().click();
        registration.getErrorMessage()
        .should('have.text', errorMessage.termsMissing)
    });

    it('Show error when first name field is missing', () => {
        registration.inputDetailsWithMissingParams('firstNameHeb')
        .getSubmitButton().click();
        registration.getErrorMessage()
        .should('have.attr', 'placeholder', errorMessage.hebrewFirstNameMissing)
    });

    it('Show error when last name in hebrew is missing', () => {
        registration.inputDetailsWithMissingParams('lastNameHeb')
        .getSubmitButton().click();
        registration.getErrorMessage()
        .should('have.attr', 'placeholder', errorMessage.hebrewLastNameMissing)
    });
});