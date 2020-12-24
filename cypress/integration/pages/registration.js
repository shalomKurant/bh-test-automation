import HomePage from "./homePage";

class Registration {
    homePage;
    userDetailes;
    constructor() {
        this.homePage = new HomePage();
        cy.fixture('data.json').then(data => {
            this.userDetailes = data.user;
        })
    }

    goToRegistrationPage() {
        this.homePage.navigateToBasePage()
        .getSighInButton().click();
        return this;
    }

    signUp() {
        this.getFirstNameHebTextBox().type(this.userDetailes.firstNameHebrew);
        this.getLastNameHebTextBox().type(this.userDetailes.lastNameHebrew);
        this.getFirstNameTextBox().type(this.userDetailes.firstName);
        this.getLastNameTextBox().type(this.userDetailes.lastName);
        this.getCellphoneTextBox().type(this.userDetailes.phoneNumber);
        this.getEmailAddressTextBox().type(this.userDetailes.emailAddress)
        this.getTermsChckbox().check({force:true});
        // this.getSubmitButton().click();
    }

    inputDetailsWithMissingParams(missingParam) {
        if (missingParam !== 'firstNameHeb') {
            this.getFirstNameHebTextBox().type(this.userDetailes.firstNameHebrew);
        } 
        if (missingParam !== 'lastNameHeb') {
            this.getLastNameHebTextBox().type(this.userDetailes.lastNameHebrew);
        } 
        if (missingParam !== 'firstName') {
            this.getFirstNameTextBox().type(this.userDetailes.firstName);
        } 
        if (missingParam !== 'lastName') {
            this.getLastNameTextBox().type(this.userDetailes.lastName);
        }
        if (missingParam !== 'phoneNumber') {
            this.getCellphoneTextBox().type(this.userDetailes.phoneNumber);
        }
        if (missingParam !== 'emailAddress') {
            this.getEmailAddressTextBox().type(this.userDetailes.emailAddress)
        }
        if (missingParam !== 'terms') {
            this.getTermsChckbox().check({force:true});
        }    
        return this;
    }

    getTitle() {
        return cy.get('[class="signUpContent"] .title span');
    }

    getFirstNameHebTextBox() {
        return cy.get('[name="firstNameHeb"]');
    }

    getLastNameHebTextBox() {
        return cy.get('[name="lastNameHeb"]');
    }

    getFirstNameTextBox() {
        return cy.get('[name="firstName"]');
    }

    getLastNameTextBox() {
        return cy.get('[name="lastName"]');
    }

    getCellphoneTextBox() {
        return cy.get('[name="cellphone"]');
    }
    
    getEmailAddressTextBox() {
        return cy.get('[name="emailAddress"]');
    }

    getTermsChckbox() {
        return cy.get('#terms');
    }

    getSubmitButton() {
        return cy.get('#progress');
    }

    getErrorMessage() {
        return cy.get('.error');        
    }
}

export default Registration;