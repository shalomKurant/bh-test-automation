import HomePage from "./homePage";

class Login {
    homePage;
    userDetails;
    constructor() {
        this.homePage = new HomePage();
        cy.fixture('data.json').then(data => {
            this.userDetails = data.user;
        });
    }

    login() {
        this.goToLoginPage();
        this.getLoginLink().click();
        this.getEmailTextBox().type(this.userDetails.emailAddress)
        this.getPasswordTextBox().type(this.userDetails.password);
        this.getSubmitButton().click();
    }

    goToLoginPage() {
        this.homePage.navigateToBasePage() 
        .getSighInButton().click();
        return this;
    }

    navigateToLoginPage() {
        this.goToLoginPage();
        this.getLoginLink().click();
    }

    getLoginLink() {
        return cy.get('.regularText.link span').contains('לחצו להתחבר!')
    }

    getEmailTextBox() {
        return cy.get('[name="emailAddress"]');
    }

    getPasswordTextBox() {
        return cy.get('[name="password"]')
    }

    getSubmitButton() {
        return cy.get('[id="progress"]')
    }

    getTitle() {
        return cy.get('#block-danhotel-content .title span');
    }

    getErrorMessage() {
        return cy.get('.error');        
    }
}

export default Login;