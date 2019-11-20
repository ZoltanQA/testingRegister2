export default class AuthPage{
    get firstName() {
        return cy.get('input[id="first-name"]')
    }
    get lastName() {
        return cy.get('input[id="last-name"]')
        //return cy.get('#last-name')- ovako se pise pravilno
    }
    get email() {
        return cy.get('input[id="email"]')
    }
    get password() {
        return cy.get('input[id="password"]')
    }
    get passwordConfirmation() {
        return cy.get('input[id="password-confirmation"]')
    }

    /*get checkbox() {
        return cy.get('check-box-nesto'proveriti)
    }*/

    get button() {
        return cy.get("button[type=submit]")
    }

    //ovde bih trebao da getujem element te klase za logout button

    register({firstName, lastName, email, password, passwordConfirmation}){
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.email.type(email)
        this.password.type(password)
        this.passwordConfirmation.type(passwordConfirmation)
        this.button.click()
    }
    ifExist(postoji){
        if (!postoji) {
            postoji = 'validata'
        } return postoji
    }

    }
    export const authPage = new AuthPage()