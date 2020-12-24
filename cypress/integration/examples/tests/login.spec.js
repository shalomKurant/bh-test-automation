/// <reference types="cypress"/>
import Login from "../../pages/login"; 

describe('Login', () => {
    let login;
    let userDetailes;
    let errorMessage;

    before(() => {
        login = new Login();
        cy.fixture('data.json').then(data => {
            userDetailes = data.user;
            errorMessage = data.errorMessages;
        })
    });

    it('Should show login page', () => {
        login.goToLoginPage()
        .getLoginLink().click();
        login.getTitle().should('have.text', 'כניסה למועדון')
    });

    it('Perform a login process', () => {
        login.login();
    });

    it('Show error when email is missing', () => {
        login.navigateToLoginPage();
        login.getPasswordTextBox().type(userDetailes.password);
        login.getSubmitButton().click();
        login.getErrorMessage().should('have.attr', 'placeholder', errorMessage.emailMissing);
    });

    it('Show error when password is missing', () => {
        login.navigateToLoginPage();
        login.getEmailTextBox().type(userDetailes.emailAddress);
        login.getSubmitButton().click();
        login.getErrorMessage().should('have.attr', 'placeholder', errorMessage.passwordMissing);
    });
});